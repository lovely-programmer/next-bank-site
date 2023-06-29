"use client";
import { useState } from "react";
import "./register.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Account({
  username,
  phoneNumber,
  account_type,
  email,
  updateFields,
  password,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <h3 style={{ marginBottom: "15px" }}>Create Login</h3>
      <div className="form__group">
        <input
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          required
          id="email"
          name="email"
          type="text"
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="form__group">
        <input
          value={phoneNumber}
          onChange={(e) => updateFields({ phoneNumber: e.target.value })}
          required
          id="phoneNumber"
          name="phoneNumber"
          type="text"
        />
        <label htmlFor="phoneNumber">Phone Number</label>
      </div>

      <div className="form__group">
        <input
          required
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => updateFields({ username: e.target.value })}
        />
        <label htmlFor="username">Username</label>
      </div>

      <div className="form__group">
        <select
          onChange={(e) => updateFields({ account_type: e.target.value })}
          value={account_type}
          name="account_type"
          required
        >
          <option value="">Select Account</option>
          <option value="Savings">Savings</option>
          <option value="Checking">Checking</option>
        </select>
      </div>

      <div
        className="form__group"
        style={{ flexDirection: "row", paddingRight: "10px" }}
      >
        <input
          onChange={(e) => updateFields({ password: e.target.value })}
          value={password}
          name="password"
          type={`${showPassword ? "text" : "password"}`}
          required
          id="password"
        />
        <label htmlFor="password">Password</label>
        {showPassword ? (
          <AiOutlineEye
            fontSize={20}
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <AiOutlineEyeInvisible
            fontSize={20}
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>
    </div>
  );
}

export default Account;
