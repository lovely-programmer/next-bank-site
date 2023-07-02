import connectDb from "@/config/db";
import User from "@/models/userModels";
// import generateToken from "@/utils/generateToken";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";

connectDb();

const register = async (request) => {
  const {
    username,
    name,
    email,
    password,
    address,
    phoneNumber,
    account_type,
    balance,
    profilePicture,
    country,
    state,
    city,
    zip_code,
    occupation,
    social_security,
    date_of_birth,
  } = await request.json();

  const userNameExist = await User.findOne({ username });
  const userEmailExist = await User.findOne({ email });

  if (userNameExist || userEmailExist) {
    return new NextResponse("Username already exist", { status: 400 });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    name,
    email,
    password: hashedPassword,
    address,
    phoneNumber,
    profilePicture,
    account_type,
    balance,
    country,
    state,
    city,
    zip_code,
    occupation,
    social_security,
    date_of_birth,
  });

  if (user) {
    return new NextResponse(
      JSON.stringify({ username: user.username, password: user.password }),
      {
        status: 201,
      }
    );
  } else {
    return new NextResponse("Invalid user data", { status: 500 });
  }
};

export { register as POST };

const getUser = async (request) => {
  return new NextResponse("its working", { status: 200 });
};

export { getUser as GET };
