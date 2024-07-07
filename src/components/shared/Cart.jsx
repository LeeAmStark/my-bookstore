export default function Cart() {
  const price = 50;
  const totalPrice = price;
  return (
    <div className="fixed h-screen right-[-0%] top-0 bg-gray-200 p-5 w-3/12 flex flex-col gap-6">
      <h2 className="text-3xl font-bold pt-10">Cart</h2>
      <hr />
      <div className="flex-col space-y-4 p-4">
        {/* Products Space */}
        <div className="flex gap-4 items-center">
          <div className="w-6/12 bg-red-300">
            <img
              src="https://m.media-amazon.com/images/I/51MT0MbpD7L._SL500_.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">
              Subtle art of not giving a fuck
            </h2>
            <p className="font-semibold">Mark Manson</p>
            <div>
              <h2 className="font-bold ">${price}</h2>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="20"
                className="w-[40px] border border-1 border-black"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Promo Code/Coupon Code"
          className="rounded-l-lg p-2 w-9/12 h-[40px] border border-gray-600"
        />
        <button className="bg-indigo-600 w-[100px] h-[40px] rounded-r-lg border-gray-600">
          APPLY
        </button>
      </div>

      <div>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Subtotal</h2>
          <h2 className="text-xl font-bold">${totalPrice}</h2>
        </div>

        <div className="flex justify-between">
          <h2 className="text-gray-500 font-semibold">Discount</h2>
          <h2 className="text-gray-500 font-semibold">$22</h2>
        </div>

        <div className="flex justify-between">
          <h2 className="text-gray-500 font-semibold">Taxes</h2>
          <h2 className="text-gray-500 font-semibold">$66</h2>
        </div>

        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Total</h2>
          <h2 className="text-xl font-bold">$71</h2>
        </div>
      </div>
    </div>
  );
}
