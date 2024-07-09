import book_img from "./images/books.jpg";

import AH_img from "./images/audible/AH_JC.jpg";
import FT_img from "./images/audible/FT_SK.jpg";
import GoT_img from "./images/audible/GoT_GM.jpg";
import HP_img from "./images/audible/HP_JKR.jpg";
import TLOR_img from "./images/audible/TLOR_AS.jpg";
import MSF_img from "./images/audible/M_SF.jpg";
import TMC_img from "./images/audible/TMC_RO.jpg";
import TPH_img from "./images/audible/TPH_Z.jpg";
import TS_img from "./images/audible/TS_RR.jpg";
import TSC_img from "./images/audible/TSC_BM.jpg";
import U_img from "./images/audible/U_DM.jpg";
import UPP_img from "./images/audible/UPP_CT.jpg";

export default function Shop() {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col">
        <div
          className="flex w-3/4 h-[350px] bg-center bg-cover rounded-2xl mt-[75px] items-center"
          style={{ backgroundImage: `url(${book_img})` }}
        >
          <div className="flex-col pl-[50px] content-center text-white">
            <h2 className="text-5xl font-extrabold ">
              EPIC BOOKS OF EVERY SORT
            </h2>
            <p className="text-2xl">
              Grow your collection with these epic finds
            </p>
          </div>
        </div>

        <div className="flex bg-orange-600 w-9/12 h-[115px] mt-[75px] justify-between items-center p-4 rounded-2xl">
          <div className="flex-col items-center pl-[50px]">
            <img
              src="https://m.media-amazon.com/images/G/01/audibleweb/arya/navigation/audible_logo_inverse._V517446980_.svg"
              alt="Audible Logo"
              width="75%"
            />
            <h2 className="text-white text-xl font-semibold">
              Official Partner with Audible
            </h2>
          </div>
          <button className="rounded-full bg-yellow-500 w-28 h-12 mr-[50px]">
            <a
              href="https://www.audible.com/"
              className="text-orange-600 font-bold"
            >
              SHOP NOW
            </a>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex-col space-y-2 text-center">
          <h2 className="font-bold text-4xl ">
            We've got what everyone's listening to
          </h2>
          <p className="font-semibold">
            Audiobooks. Bestsellers. New Releases. That story you've been
            waiting for.
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={AH_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">
              A Court of Thorns and Roses
            </h4>
            <a href="" className="mt-1 text-gray-500">
              By: Sarah J. Maas
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={FT_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">Fairy Tale</h4>
            <a href="" className="mt-1 text-gray-500">
              By: Stephen King
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={GoT_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">The Game of Thrones</h4>
            <a href="" className="text-lg mt-1 text-gray-500">
              By: George R.T Maas
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={HP_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">
              Harry Potter and The Philosopher's ...
            </h4>
            <a href="" className="text-sm mt-1 text-gray-500">
              By: J.K Rowling
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={TLOR_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">
              The Lord of The Rings
            </h4>
            <a href="" className="mt-1 text-gray-500">
              By: Andy Serkis
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={MSF_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">Mythos: Greek Retold</h4>
            <a href="" className="text-sm mt-1 text-gray-500">
              By: Stephen Fry
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={TMC_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">
              The Thursday Murder Club
            </h4>
            <a href="" className="text-sm mt-1 text-gray-500">
              By: Richard Osman
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={TPH_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">The Primal Hunter</h4>
            <a href="" className="mt-1 text-gray-500">
              By: Zogarth
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={TS_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">The Suspect</h4>
            <a href="" className="text-sm mt-1 text-gray-500">
              By: Rob Rinder
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={TSC_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">The Satsuma Complex</h4>
            <a href="" className="mt-1 text-gray-500">
              By: Bob Mortimer
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={U_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">Unruly</h4>
            <a href="" className="mt-1 text-gray-500">
              By: David Mitchell
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md">
            <img className="rounded-full" src={UPP_img} alt="" width="85%" />
            <h4 className="text-lg mt-2 font-semibold">
              The Ultra Processed People
            </h4>
            <a href="" className="mt-1 text-gray-500">
              By: Chris Van Tulleken
            </a>
            <p className="font-bold text-md">$50</p>
            <button className="w-[125px] bg-red-500 text-white text-lg rounded py-1">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex p-4 space-x-96 border shadow-md rounded-xl items-center w-full max-w-4xl h-[200px] m-auto">
          <div className="flex flex-col gap-1 w-3/12">
            <h2 className="text-2xl font-bold text-indigo-600">Bookly.</h2>
            <h2 className="">Deals made easy all year long. Free Shipping. Best Prices</h2>
            <button className="w-1/2 bg-red-500 rounded text-white py-1">Find More</button>
          </div>

          <div className="flex">
            <img
              src="https://cdn.pixabay.com/photo/2019/08/28/07/47/portrait-4436027_960_720.jpg"
              alt=""
              className="w-20"
            />
            <img
              src="https://cdn.pixabay.com/photo/2023/03/12/18/47/castle-7847599_960_720.jpg"
              alt=""
              className="w-20"
            />
            <img
              src="https://cdn.pixabay.com/photo/2018/10/11/17/36/gothic-3740388_640.jpg"
              alt=""
              className="w-20"
            />
          </div>
        </div>
      </div>
    </>
  );
}
