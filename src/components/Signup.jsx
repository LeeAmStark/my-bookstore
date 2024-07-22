import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  // Create useState variables that will reference details for your Schema
  const [email, setEmail] = useState(""); // Like so, I have 'email' in my schema, so with useState I reference them
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  
  // These below are for part of my schema regarding setting the account type and for getting the errors that I stated in schema in the 'required:' field
  const [accountType, setAccountType] = useState("User");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const back_end_port = "http://localhost:5000"; // Create a variable for your back end port, 
  // you could try creating a .env file for this but it didn't work for me so I did it this way, 
  // it's not really needed by the way since the webpage is not published on the internet yet, as I've learned

  // NOTE: Both our NodeJS and our React App don't need to be running on the same server as long as we reference it here I guess


  const handleSubmit = async (e) => { // This function handleSubmit is used when we submit form, as a form should have a submit button, 
                                      // when that button is clicked, it calls the onSubmit, which calls the function we pass into it


    e.preventDefault(); // This here is to prevent the page from reloading so we can load to the log in page

    // These are to capture my errors that I've stated in schema as I mentioned - you can ignore it :)
    setError("");
    setSuccess("");

    // This is for the second password input field used to confirm that the password you've inputted matches the first
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      alert("Passwords do not match");
      return;
    }

    // So with axios we send a POST to the back-end endpoint i.e the localhost:3000/auth/signup for our NodeJS sign up
    try {
      const response = await axios.post(`${back_end_port}/auth/signup`, { //
        email,
        password,
        username,
      });

      // Most of the errors are already handled and logged in the backend, so this part of the code down to -
      if (response.data.success) {                                                                       // |
        setSuccess("Signup successful!");                                                                // |
        alert("Your account has been created");                                                          // |
      } else {                                                                                           // |
        setError("Signup failed");                                                                       // |
        alert("Please make sure all information is filled");                                             // |
      }                                                                                                  // |
                                                                                                      // here will always return true and execute only the if statement
    } catch (error) {
      setError("An error occurred during signup");
      alert()
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-center">
      <div className="bg-slate-300 w-96 p-8 text-center flex flex-col gap-8">
        <h2 className="text-3xl font-bold">SIGN UP</h2>
        <form
          onSubmit={handleSubmit} // We pass in the handleSubmit function on the 'onSubmit' of our form opening tag
          className="flex flex-col space-y-4 align-center"
        >
          <input
            type="username"
            placeholder="Enter your Username"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => {
              setUsername(e.target.value); // This here will assign whatever is inputed in the input field of the form to the variable,-
              // 'username', preparing it to be sent to our backend once the handleSubmit function is called by the form when we click on our submit button,
            }}
          />
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => {
              setEmail(e.target.value); // Same thing here as well 
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <div className="dropdown">
            <button className="dropbtn">Account Type</button>
            <div className="dropdown-content">
              <a href="#user" onClick={() => setAccountType("User")}>
                User
              </a>
              <a href="#admin" onClick={() => setAccountType("Admin")}>
                Admin
              </a>
            </div>
          </div>
          <button
            className="bg-purple-700 w-35 rounded-sm content-center"
            type="submit"
            // Make sure your button has a type of submit as this works in React to trigger the onSubmit to -
            // called which will thereby call the function that's given to it
          >
            Sign Up
          </button>
          <h3>
            Already have an account?
            <a href="/login" className="text-blue-800">
              Log in here
            </a>
          </h3>
        </form>
      </div>
    </div>
  );
}
