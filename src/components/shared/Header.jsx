import { IoCartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
  return (
    <header>
      <div className="absolute w-full bg-gray-200">
        <h2>Here</h2>
      </div>
      <div className="flex w-full fixed space-x-24 justify-center items-center bg-gray-300 h-10">
        <h2 className="text-2xl font-bold text-indigo-600">
          <a href="/">Bookly.</a>
        </h2>
        <nav>
          <ul className="flex gap-14 text-xl">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="">Orders</a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-6 items-center text-2xl">
          <div className="flex">
            <input
              type="text"
              id="searchMenu"
              placeholder="Search..."
              title="Type in a category"
              className="text-xl border border-solid border-gray-700 w-26 pl-3 rounded-full"
            />
            <div className="text-3xl absolute w-10 ml-52 font-black rounded-full">
              <IoSearchSharp />
            </div>
          </div>
          <button className="text-3xl text-indigo-600 font-bold w-2/4">
            <FaUser />
          </button>
          <button
            className="text-4xl text-indigo-600 font-bold w-2/4"
          >
            <IoCartOutline />
          </button>

          <ul id="menu" className="hidden">
            <li>
              <a href="">The Subtle Art of Not giving a Fuck</a>
            </li>
            <li>
              <a href="">Philosopher's Guess</a>
            </li>
            <li>
              <a href="">The Deep End</a>
            </li>
            <li>
              <a href="">Javascript for Dummies</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
