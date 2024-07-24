import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const back_end_port = "http://localhost:5000"; // Backend URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${back_end_port}/auth/login`, {
        email,
        password,
        username,
      });

      if (response.data.success) {
        alert("You'll be logged in");
        navigate("/");
      } else {
        alert(response.data); // Show error message
      }
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data); // Display error message from backend
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-md text-base"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="p-2 border border-gray-300 rounded-md text-base"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
