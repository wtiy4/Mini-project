import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  function nav() {
    if (
      user === localStorage.getItem("username") &&
      password === localStorage.getItem("password")
    ) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Incorrect username or password!");
    }
  }

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="flex flex-col items-center justify-center gap-5 bg-indigo-100 w-[500px] h-[500px] rounded-r-full">
        <input
          type="text"
          placeholder="Enter your Name"
          className="border-2 border-indigo-500 p-2 rounded"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="border-2 border-indigo-500 p-2 rounded"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="cursor-pointer bg-indigo-500 text-white p-2 rounded w-1/2"
          onClick={nav}
        >
          Log In
        </button>

        <Link to="/signup" className="underline text-blue-700">
          Create an account if you don't have one
        </Link>
      </div>
    </div>
  );
}

export default Login;
