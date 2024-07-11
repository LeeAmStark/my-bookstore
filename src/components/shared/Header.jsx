import { IoCartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


export default function Header() {
  return (
    <header className="pb-24">
      <div className="fixed w-full">
        <div className="w-full bg-gray-400 flex justify-between p-2 pl-8 pr-8">
          <div className="flex gap-2 text-2xl">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn/>
          </div>
          <div className="flex gap-2">
            <h2>new</h2>
            <a href="/login" className="text-indigo-600">Login</a>
            <h2>|</h2>
            <a href="/register" className="text-indigo-600">Register</a>
          </div>
        </div>
        <div className="flex w-full fixed space-x-24 justify-center items-center bg-gray-300 h-14">
          <h2 className="text-2xl font-bold hover:text-indigo-600">
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
                <a href="/order">Orders</a>
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
            <button className="text-3xl hover:text-indigo-600 font-bold w-2/4">
              <FaUser />
            </button>
            <a href="/cart" className="text-4xl hover:text-indigo-600 font-bold w-2/4">
              <IoCartOutline />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
