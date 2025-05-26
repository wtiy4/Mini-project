import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      password.length <= 8 ||
      confirmPassword.length <= 8 ||
      password !== confirmPassword ||
      user.length <= 3 ||
      user.length > 50
    ) {
      alert("Your password or username isn't valid or doesn't match.");
      return;
    } else {
      alert("Signup successful!");
      localStorage.setItem("username", user);
      localStorage.setItem("password", password);
      navigate("/login");
    }
  }

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="flex flex-col items-center justify-center gap-5 bg-indigo-100 w-[500px] h-[500px] rounded-l-full p-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full items-center"
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="border-2 border-indigo-500 p-2 rounded w-3/4"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter your Email"
            className="border-2 border-indigo-500 p-2 rounded w-3/4"
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 border-indigo-500 p-2 rounded w-3/4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Re-enter your password"
            className="border-2 border-indigo-500 p-2 rounded w-3/4"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="border-2 border-indigo-500 bg-indigo-500 text-white p-2 rounded w-1/2"
          >
            Submit
          </button>
        </form>

        <Link to="/login" className="underline text-blue-700">
          Already have an account? Log in
        </Link>
      </div>
    </div>
  );
}

export default Signup;
