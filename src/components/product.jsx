

const Product = ({ data }) => {
    console.log(data)
    const addToCart = () => {
        //axios.post('url', { qty: 32, productId: data._id })
        console.log(data._id)
    }

    return(
        <div>
        <div className="border border-black w-[250px] rounded-[5px] shadow-xl">
            <div className="w-[180px] flex flex-col gap-[10px] m-[auto] p-[10px] text-center static">
            <div className="bg-red-600 absolute text-white rounded-[5px] w-[50px] h-[35px] ml-[-20px] mt-[-5px] content-center">
                <h1>
                $50/
                </h1>
            </div>
            <img
                width="100%"
                height="100%"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQv_LrJLNAxtIXUg3LNNeF9Z47IGhW2GErH5cxKUy1zAl92u7SgBt_RcvG1YETcCpUJQ&usqp=CAU"
                alt=""
            />

            <h2 className="font-bold">Choose your adventure</h2>
            <div>
                <input
                value={data.qty}
                className="border border-black rounded-[5px] w-[150px] h-[35px]"
                type="number"
                />
            </div>
            <div>
                <button onClick={addToCart} className="bg-purple-700 w-[120px] h-[30px] text-white font-bold rounded-[5px]">
                    Add To Cart
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Product;