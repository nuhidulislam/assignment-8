

const Card = ({singleProduct}) => {
    
    const {product_title, product_image, price} = singleProduct
    return (
        <div className="p-3 rounded-2xl bg-gray-200">
            <div>
                <img className=" rounded-2xl h-[200px] w-full " src={product_image} alt="" />
            </div>
            <div className="space-y-2 mt-2" >
            <h1 className="text-[20px] font-bold">{product_title}</h1>
            <h1>Price: {price}k</h1>
            <button className="py-2 px-5 rounded-3xl border-2 border-green-700 text-[16px] font-semibold">View Details</button>
            </div>
        </div>
    );
};

export default Card;