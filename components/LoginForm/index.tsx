"use client";

import { validUsers } from "@/data/user";
import LoginFormSideContent from "../LoginFormSideContent";
import "./loginForm.scss";
import { useState } from "react";
import { useUserContext } from "@/context/UserName";

const LoginForm = () => {
  const { setSavedUserName } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = validUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setError("");

      // ✅ login with context
      setSavedUserName(foundUser.email);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="logInForm">
      <div className="logInForm__flex">
        <LoginFormSideContent />
      </div>

      <div className="logInForm__form">
        <h1 className="logInForm__title">
          Want to discover delicious recipes? <br />
          Log in now.
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="logInForm__selectContainer">
            <select
              id="email"
              name="email"
              required
              className="logInForm__selectArea"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <option value="" className="logInForm__selecDefault">
                Select your email
              </option>

              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>

          <div className="logInForm__selectContainer">
            <select
              id="password"
              name="password"
              value={password}
              className="logInForm__selectArea"
              onChange={(e) => setPassword(e.target.value)}
            >
              <option value="" className="logInForm__selecDefault">
                Select your password
              </option>

              <option value="password1">password 1</option>
              <option value="password2">password 2</option>
              <option value="password3">password 3</option>
            </select>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="logInForm__submtBtn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;