import connectDb from "@/config/db";
import User from "@/models/userModels";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

connectDb();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const user = await User.findOne({ username: credentials.username });
        if (
          user &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          return user;
        } else {
          res.status(400);
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  pages: {
    error: "/login",
  },
});

export { handler as GET, handler as POST };
