import AH_img from "../images/audible/AH_JC.jpg";
import FT_img from "../images/audible/FT_SK.jpg";
import GoT_img from "../images/audible/GoT_GM.jpg";
import HP_img from "../images/audible/HP_JKR.jpg";
import TLOR_img from "../images/audible/TLOR_AS.jpg";
import MSF_img from "../images/audible/M_SF.jpg";
import TMC_img from "../images/audible/TMC_RO.jpg";
import TPH_img from "../images/audible/TPH_Z.jpg";
import TS_img from "../images/audible/TS_RR.jpg";
import TSC_img from "../images/audible/TSC_BM.jpg";
import U_img from "../images/audible/U_DM.jpg";
import UPP_img from "../images/audible/UPP_CT.jpg";

export default function Cart() {
  const price = 50;
  const totalPrice = price;
  return (
    <div className="bg-gray-200 p-5 w-full flex flex-col gap-6 m-auto mt-12">
      <div class="container mx-auto p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white shadow-md rounded-lg overflow-hidden p-2">
            <div class="relative">
              <img
                class="w-64 h-64 "
                src={AH_img}
                alt="Book Image"
              />
              <button class="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1">
                ×
              </button>
            </div>
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-800">
                Atomic Habits
              </h2>
              <p class="text-red-600 text-xl font-bold">$50/-</p>
              <div class="flex items-center mt-4">
                <input
                  type="number"
                  class="border rounded w-12 p-1 text-center"
                  value="1"
                />
                <button class="ml-4 bg-orange-500 text-white rounded px-4 py-2">
                  Update
                </button>
              </div>
              <p class="mt-2 text-gray-600">
                sub total: <span class="text-red-600">$50/-</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
