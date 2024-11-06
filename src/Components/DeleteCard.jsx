import { useLoaderData, useLocation } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

const DeleteCard = ({singleProduct,handleRemove}) => {
   

   
   
    const {pathname}= useLocation()
    const {product_id,product_image, description, price, product_title}= singleProduct
    return (
       <div className="my-1 relative">
         <div className="h-[200px] w-[800px]  bg-blue-100  mx-auto flex rounded-3xl p-4">
            <div className="w-[250px] h-full  rounded-3xl" >
                <img className='rounded-3xl bg-cover bg-center h-full w-full' src={product_image} alt="" />
            </div>
            <div className="w-[550px] h-full  rounded-3xl px-5 flex flex-col justify-center space-y-2" >
                <h1 className="text-2xl font-semibold">{product_title}</h1>
                <p className="text-gray-400">{description}</p>
                <p className="text-[18px] font-bold">Price: ${price}</p>
            </div>
            
        </div>



        {pathname=='/AboutUs' &&(
            <button onClick={()=>handleRemove(product_id)} className="absolute top-[35px] text-red-600 text-3xl right-[270px]"><MdOutlineCancel /></button>
        )}

       </div>
    );
};

export default DeleteCard;