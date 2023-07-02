import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { NextResponse, NextRequest } from "next/server";

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  Cookies.set("name", token, {
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
    expires: 30,
  });

  // const response = NextResponse.next();

  // return response.cookies.set({
  //   httpOnly: true,
  //   name: "jwt",
  //   value: token,
  //   secure: process.env.NODE_ENV !== "development",
  //   sameSite: "strict",
  //   maxAge: 30 * 24 * 60 * 60 * 1000,
  //   path: "/",
  // });
};

export default generateToken;
