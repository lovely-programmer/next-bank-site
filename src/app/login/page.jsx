"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function page() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const router = useRouter;

  const session = useSession();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    signIn("credentials", { username, password });
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__nav}>
          <div className={styles.login__nav__content}>
            <Link href="/">
              <h2>America Bank</h2>
            </Link>
          </div>
        </div>

        <div className={styles.login__form}>
          <div className={styles.login__header}>
            <h3>Online Banking Sign-in</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <input
                onChange={handleChange}
                value={username}
                name="username"
                type="text"
                required
                id="username"
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className={styles.remember__username}>
              <input type="checkbox" id="" />
              <span>Remember my username</span>
            </div>
            <div
              className={styles.form__group}
              style={{ flexDirection: "row", paddingRight: "10px" }}
            >
              <input
                onChange={handleChange}
                value={password}
                name="password"
                type={`${showPassword ? "text" : "password"}`}
                required
                id="password"
              />
              <label htmlFor="password">Password</label>
              {showPassword ? (
                <AiOutlineEyeInvisible
                  fontSize={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <AiOutlineEye
                  fontSize={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <div className={styles.form__button}>
              <button>Log in</button>
            </div>
            <div className={styles.create__account__link}>
              <p>
                <Link href="/register">Create a username and Password</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
