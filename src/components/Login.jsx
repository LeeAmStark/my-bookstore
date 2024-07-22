import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, findEmail] = useState("");
  const [password, findPassword] = useState("");
  const [username, findUsername] = useState("");

  const back_end_port = "http://localhost:5000"; // Create a variable for your back end port,

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${back_end_port}/auth/login`, {
        email,
        password,
        username,
      });

      if(response.data.success) {
        alert("You're about to be redirected in...")
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-center">
      <div className="bg-slate-300 w-96 p-8 text-center flex flex-col gap-8">
        <h2 className="text-3xl font-bold">LOGIN NOW</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 align-center">
          <input
            type="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter your Username"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
            className="p-2 border border-gray-300 rounded"
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
