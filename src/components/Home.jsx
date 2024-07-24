import React from "react";

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Cart from "./shared/Cart";

//Images
//Misc Image
import homeBG from "./images/home-bg.jpg";
import aboutBG from "./images/about-img.jpg";

//Books Image
import TWAA_img from "./images/books-img/the_world.jpg";
import THL_img from "./images/books-img/the_happy_lemon.jpg";
import RG_img from "./images/books-img/radical_gardening.jpg";
import S_img from "./images/books-img/shattered.jpg";
import TGIS_img from "./images/books-img/the_girl_of_ink_and_stars.jpg";
import NS_img from "./images/books-img/nightshade.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="flex items-center justify-center w-vw h-[500px] bg-center bg-cover"
        style={{ backgroundImage: `url(${homeBG})` }}
      >
        <div className="flex-col space-y-8 gap-28 self-center text-center text-white w-1/2">
          <h2 className="font-bold text-6xl p">
            HAND PICKED BOOK TO YOUR DOOR
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nostrum omnis molestias ullam exercitationem libero fugit deleniti
            repudiandae voluptatem tenetur?
          </p>
          <button className="text-xl bg-indigo-600 w-48 rounded p-3">
            Discover More
          </button>
        </div>
      </div>
      <div className="flex-col content-center text-center justify-center pt-4">
        <h1 className="text-2xl font-bold">LATEST PRODUCTS</h1>
      </div>
      <div className="w-full p-4">
        <div className="w-2/4 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 p-4 rounded-lg shadow-md">
            <img src={TWAA_img} alt="" width="100%" />
            <h4 className="text-xl">The World of Abstract Art</h4>
            <div className="flex ">
              <p className="font-bold text-2xl">$50</p>
              <input type="number" className="w-10 ml-6 mb-3 text-xl rounded" />
            </div>
            <button className="w-4/6 bg-red-500 text-xl rounded">
              Add To Cart
            </button>
          </div>

          <div className="border border-gray-200 p-4 rounded-lg shadow-md">
            <img src={THL_img} alt="" width="100%" />
            <h4 className="text-xl">The Happy Lemon</h4>
            <div className="flex">
              <p className="font-bold text-xl">$50</p>
              <input type="number" className="w-10 ml-6 mb-3 text-xl rounded" />
            </div>
            <button className="w-4/6 bg-red-500 text-xl rounded">
              Add To Cart
            </button>
          </div>

          <div className="border border-gray-200 p-4 rounded-lg shadow-md">
            <img src={RG_img} alt="" width="100%" />
            <h4 className="text-xl">Radical Gardening</h4>
            <div className="flex ">
              <p className="font-bold text-xl">$50</p>
              <input type="number" className="w-10 ml-6 mb-3 text-xl rounded" />
            </div>
            <button className="w-4/6 bg-red-500 text-xl rounded">
              Add To Cart
            </button>
          </div>

          <div className="border border-gray-200 p-4 rounded-lg shadow-md">
            <img src={S_img} alt="" width="100%" />
            <h4 className="text-xl">Shattered</h4>
            <div className="flex ">
              <p className="font-bold text-xl">$50</p>
              <input type="number" className="w-10 ml-6 mb-3 text-xl rounded" />
            </div>
            <button className="w-4/6 bg-red-500 text-xl rounded">
              Add To Cart
            </button>
          </div>

          <div className="border border-gray-200 p-4 rounded-lg shadow-md">
            <img src={TGIS_img} alt="" width="100%" />
            <h4 className="text-xl">The Girl of Ink & Stars</h4>
            <div className="flex ">
              <p className="font-bold text-xl">$50</p>
              <input type="number" className="w-10 ml-6 mb-3 text-xl rounded" />
            </div>
            <button className="w-4/6 bg-red-500 text-xl rounded">
              Add To Cart
            </button>
          </div>

          <div className="border border-gray-200 p-4 rounded-lg shadow-md">
            <img src={NS_img} alt="" width="100%" />
            <h4 className="text-xl">Nightshade</h4>
            <div className="flex ">
              <p className="font-bold text-xl">$50</p>
              <input type="number" className="w-10 ml-6 mb-3 text-xl rounded" />
            </div>
            <button className="w-4/6 bg-red-500 text-xl rounded">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center self-center">
        <button className="w-[45%] h-4/6 border-4 rounded border-red-500 text-2xl font-bold">
          LOAD MORE
        </button>
      </div>
      <div className="flex mt-14 justify-center">
        <div className="space-y-8 shadow-md">
          <img src={aboutBG} alt="" />
        </div>
        <div className="rounded bg-gray-200 flex-col space-y-4 w-1/3 h-80 content-center self-center shadow-md p-4">
          <h2 className="text-3xl font-bold ">ABOUT US</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vero
            fugiat! Beatae, laudantium harum doloribus delectus itaque
            necessitatibus suscipit odit.
          </p>
          <button className="w-2/4 border-4 rounded border-red-500 text-2xl font-bold">
            READ MORE
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
