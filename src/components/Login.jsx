import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, findEmail] = useState("");
  const [password, findPassword] = useState("");
  const [username, findUsername] = useState("");
  const navigate = useNavigate();

  const back_end_port = "http://localhost:5000"; // Create a variable for your back end port,

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${back_end_port}/auth/login`, {
        email,
        password,
        username,
      });

      if (response.data.success) {
        // setTimeout(navigate("/home"),  logTimer = 10000);
        alert(`You'll be logged in`);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error)
      alert(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-center">
      <div className="bg-slate-300 w-96 p-8 text-center flex flex-col gap-8 shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold">LOGIN NOW</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 align-center"
        >
          <input
            type="email"
            onChange={(e) => {
              findEmail(e.target.value);
            }}
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-md text-base"
          />
          <input
            type="username"
            onChange={(e) => {
              findUsername(e.target.value);
            }}
            placeholder="Enter your username"
            className="p-2 border border-gray-300 rounded-md text-base"
          />
          <input
            type="password"
            onChange={(e) => {
              findPassword(e.target.value);
            }}
            placeholder="Enter your password"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            className="bg-purple-700 w-24 h-10 rounded content-center"
            type="submit"
          >
            Login Now
          </button>

          <h3>
            Don't have an account?{" "}
            <a href="/register" className="text-blue-800">
              Sign up here
            </a>
          </h3>
        </form>
      </div>
    </div>
  );
}
