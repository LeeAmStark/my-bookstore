import "./shared/menu.css";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-center">
      <div className="bg-slate-300 w-96 p-8 text-center flex flex-col gap-8">
        <h2 className="text-3xl font-bold">SIGN UP</h2>
        <form action="POST" className="flex flex-col space-y-4 align-center">
          <input
            type="email"
            placeholder="Enter your Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => {
              setEmail(email.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => {
              setPassword(password.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="p-2 border border-gray-300 rounded"
          />
          <div className="dropdown">
            <button className="dropbtn">Account Type</button>
            <div className="dropdown-content">
              <a href="/login">User</a>
              <a href="">Admin</a>
            </div>
          </div>
          <button
            className="bg-purple-700 w-35 rounded-sm content-center"
            type="submit"
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
