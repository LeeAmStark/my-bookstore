import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="pl-14 pt-16">
        <h2 className="text-4xl font-bold">How can we help you today?</h2>
      </div>

      <input
        type="text"
        placeholder="Search Bookly for help..."
        className="border w-2/6 rounded-full shadow-md font-semibold ml-10 pl-8 p-3 justify-center items-center"
      />

      <div className="w-full h-[300px] flex items-center content-center">
        <div className="w-4/5 m-auto flex">
          <div className="bg-sky-300 flex flex-col gap-6 h-[300px] justify-center p-8">
            <h2 className="w-2/4 text-2xl font-semibold">
              Get personalized help and see your recent orders
            </h2>
            <button className="bg-indigo-500 w-2/4 h-[50px] text-xl font-bold text-white">
              Sign in
            </button>
            <h3 className="text-lg ">
              Don't have an account?{" "}
              <a href="/" className="text-blue-900 font-bold">
                Register Now
                <IoIosArrowRoundForward />
              </a>
            </h3>
          </div>

          <div className="bg-sky-200 flex flex-col justify-center gap-6 h-[300px] p-8">
            <div>
              <h2 className="text-xl font-bold">Buying as a guest</h2>
              <p className="text-sm">Popular Article</p>
              <IoIosArrowRoundForward />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Get help with an item that hasn't arrived
              </h2>
              <p className="text-sm">Popular Article</p>
              <IoIosArrowRoundForward />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Get help with a hacked account
              </h2>
              <p className="text-sm">Popular Article</p>
              <IoIosArrowRoundForward />
            </div>
          </div>

          <div className="bg-sky-100 flex flex-col justify-center gap-6 h-[300px] p-8">
            <div>
              <h2 className="text-xl font-bold">
                Get help if you bought as a guest
              </h2>
              <p className="text-sm">Popular Article</p>
              <IoIosArrowRoundForward />
            </div>

            <div>
              <h2 className="text-xl font-bold">Creating a Bookly account</h2>
              <p className="text-sm">Popular Article</p>
              <IoIosArrowRoundForward />
            </div>

            <div>
              <h2 className="text-xl font-bold">Reset your password</h2>
              <p className="text-sm">Popular Article</p>
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold pl-14 p-6">Browse Help Articles</h1>
        <div className="container mx-auto p-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                alt="Buying"
                className="w-12 h-12 mb-2"
              />
              <p className="text-lg font-bold">Buying</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                alt="Selling"
                className="w-12 h-12 mb-2"
              />
              <p className="text-lg font-bold">Selling</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                alt="Account"
                className="w-12 h-12 mb-2"
              />
              <p className="text-lg font-bold">Account</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                alt="Returns and refunds"
                className="w-12 h-12 mb-2"
              />
              <p className="text-lg font-bold">Returns and refunds</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                alt="Shipping and tracking"
                className="w-12 h-12 mb-2"
              />
              <p className="text-lg font-bold">Shipping and tracking</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                alt="Fees and billing"
                className="w-12 h-12 mb-2"
              />
              <p className="text-lg font-bold">Fees and billing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-700 bg-gray-100 w-1/4 h-[450px] m-auto flex flex-col items-center">
        <h2 className="p-6 text-2xl font-bold ">Specific Information</h2>
        <div className="w-full">
          <form action="" className="flex flex-col gap-6 items-center">
            <input
              className="border border-gray-600 w-10/12 text-lg rounded-sm h-[50px] p-3"
              type="text"
              placeholder="Enter your name"
              id=""
            />
            <input
              className="border border-gray-600 w-10/12 text-lg rounded-sm h-[50px] p-3"
              type="email"
              placeholder="Enter your email"
              id=""
            />
            <input
              className="border border-gray-600 w-10/12 text-lg rounded-sm h-[50px] p-3"
              type="number"
              placeholder="Enter your number"
              id=""
            />
            <textarea
              className="border border-gray-600 w-10/12 text-lg rounded-sm pt-3 pl-3"
              name=""
              placeholder="Enter your specific message"
              id=""
            ></textarea>
            <button type="Submit" className="w-56 h-10 text-white rounded bg-indigo-600 text-xl font-bold">
              Send Message
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}
