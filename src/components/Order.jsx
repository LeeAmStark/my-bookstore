import U_img from "./images/audible/U_DM.jpg";
import TSC_img from "./images/audible/TSC_BM.jpg";

export default function Order() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-based (0-11), so we add 1
  const day = today.getDate();

  return (
    <div className="p-12 flex gap-8">
      {/* Order Batch #1 */}
      <div className="p-5 border border-gray-500 shadow-md rounded-sm w-1/5 ">
        <h2 className="text-3xl font-semibold">Order ID: 334902461</h2>
        <div>
          <div className="flex gap-1">
            <h2 className="font-semibold text-gray-500">Order date:</h2>
            <h2 className="font-bold">
              {day},{month},{year}
            </h2>
          </div>
          <h2 className="font-semibold text-green-700">
            Estimated delivery: MayNeverCome, 14 2022
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Your Orders:</h2>
            <div className="flex gap-4 bg-sky-100 border shadow-md rounded-lg">
              <img src={U_img} alt="" width="25%" />
              <div>
                <h2 className="font-semibold">Unruly</h2>
                <h2>$24.99</h2>
              </div>
            </div>
          </div>

          <div className="flex gap-14">
            <div>
              <h2 className="font-semibold">Payment</h2>
              <h2>Visa **59***</h2>
            </div>
            <div>
              <h2 className="font-semibold">Delivery</h2>
              <h2>Address</h2>
              <h2>Lost, Nowhere. 2B Found, Atol</h2>
              <h2>474-769-3919</h2>
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <h2 className="font-semibold">Need help?</h2>
              <h2>Order Issues</h2>
              <h2>Delivery Info</h2>
              <h2>Returns</h2>
            </div>
            <div>
              <h2 className="font-semibold">Order Summary</h2>
              <h2>Subtotal</h2>
              <h2>Delivery Info</h2>
              <h2>Returns</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Order Batch #2 */}
      <div className="p-5 border border-gray-500 shadow-md rounded-sm w-1/5 ">
        <h2 className="text-3xl font-semibold">Order ID: 334902461</h2>
        <div>
          <div className="flex gap-1">
            <h2 className="font-semibold text-gray-500">Order date:</h2>
            <h2 className="font-bold">
              {day},{month},{year}
            </h2>
          </div>
          <h2 className="font-semibold text-green-700">
            Estimated delivery: MayNeverCome, 14 2022
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Your Orders:</h2>
            <div className="flex gap-4 bg-sky-100 border shadow-md rounded-lg">
              <img src={TSC_img} alt="" width="25%" />
              <div>
                <h2 className="font-semibold">The Satsuma Complex</h2>
                <h2>$24.99</h2>
              </div>
            </div>
          </div>

          <div className="flex gap-14">
            <div>
              <h2 className="font-semibold">Payment</h2>
              <h2>Visa **59***</h2>
            </div>
            <div>
              <h2 className="font-semibold">Delivery</h2>
              <h2>Address</h2>
              <h2>Lost, Nowhere. 2B Found, Atol</h2>
              <h2>474-769-3919</h2>
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <h2 className="font-semibold">Need help?</h2>
              <h2>Order Issues</h2>
              <h2>Delivery Info</h2>
              <h2>Returns</h2>
            </div>
            <div>
              <h2 className="font-semibold">Order Summary</h2>
              <h2>Subtotal</h2>
              <h2>Delivery Info</h2>
              <h2>Returns</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
