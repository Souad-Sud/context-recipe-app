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
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (foundUser) {
      setError("");

      // save username in context
      setSavedUserName(foundUser.email);

      // save full user in localStorage
      localStorage.setItem(
        "loggedUser",
        JSON.stringify(foundUser)
      );

      console.log("User logged in");
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
          Want to discover delicious recipes?
          <br />
          Log in now.
        </h1>

        <form onSubmit={handleSubmit}>
          {/* EMAIL */}
          <div className="logInForm__selectContainer">
            <select
              id="email"
              name="email"
              required
              className="logInForm__selectArea"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            >
              <option value="">
                Select your email
              </option>

              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>

          {/* PASSWORD */}
          <div className="logInForm__selectContainer">
            <select
              id="password"
              name="password"
              required
              value={password}
              className="logInForm__selectArea"
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            >
              <option value="">
                Select your password
              </option>

              <option value="password">
                password
              </option>
            </select>
          </div>

          {/* ERROR */}
          {error && (
            <p style={{ color: "red" }}>
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="logInForm__submtBtn"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;