export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-center">
      <div className="bg-slate-300 w-96 p-8 text-center flex flex-col gap-8">
        <h2 className="text-3xl font-bold">LOGIN NOW</h2>
        <form action="" className="flex flex-col space-y-4 align-center">
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
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
            Don't have an account? <a href="/register" className="text-blue-800">Sign up here</a>
          </h3>
        </form>
      </div>
    </div>
  );
}
