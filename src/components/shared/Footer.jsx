import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div>
      <div className="mt-10 flex bg-gray-700 h-64 text-center items-center justify-center">
        <div className=" flex-col w-2/5 text-gray-100 space-y-4">
          <h2 className="font-bold text-4xl">HAVE ANY QUESTIONS?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            eum dicta eaque facilis nulla reiciendis blanditiis inventore ipsam
            expedita laudantium!
          </p>
          <button className="w-56 h-10 rounded bg-indigo-600 text-2xl font-bold">
            Contact Us
          </button>
        </div>
      </div>

      <footer>
        <div className="pt-8 pb-6 bg-indigo-300">
          <div className="flex w-6/12 m-auto justify-between">
            <nav>
              <h2 className="font-bold text-indigo-900">QUICK LINKS</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </nav>

            <nav>
              <h2 className="font-bold text-indigo-900">EXTRA LINKS</h2>
              <ul>
                <li>Login</li>
                <li>Register</li>
                <li>Cart</li>
                <li>Order</li>
              </ul>
            </nav>

            <nav>
              <h2 className="font-bold text-indigo-900">CONTACT INFO</h2>
              <ul>
                <li className="flex items-center gap-3">
                  <BsFillTelephoneFill />
                  +234-blue-lost-near
                </li>
                <li className="flex items-center gap-3">
                  <BsFillTelephoneFill /> +234-no-where
                </li>
                <li className="flex items-center gap-3">
                  <MdEmail />
                  williamsigbinoba2@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <FaLocationDot />
                  Order
                </li>
              </ul>
            </nav>

            <nav>
              <h2 className="font-bold text-indigo-900">FOLLOW US</h2>
              <ul>
                <li className="flex items-center gap-3">
                  <FaFacebookF /> Facebook
                </li>
                <li className="flex items-center gap-3">
                  <FaXTwitter /> X
                </li>
                <li className="flex items-center gap-3">
                  <FaInstagram /> Instagram
                </li>
                <li className="flex items-center gap-3">
                  <FaLinkedinIn /> LinkedIn
                </li>
              </ul>
            </nav>
          </div>
          <div className="pt-12 pl-[475px]">
            <h2>Copyright © 1995-2024 Bookly Inc. All Rights Reserved. </h2>
          </div>
        </div>
      </footer>
    </div>
  );
}
