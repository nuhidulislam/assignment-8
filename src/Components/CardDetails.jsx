
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCard, getAllCard } from "../utility";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";


const CardDetails = () => {
    const {id}= useParams()
    const allProductData= useLoaderData()
   
    const [product, setProduct]= useState({})
    const [isCard, setIsCard]= useState(false)


    const {product_id,rating,description, product_title, product_image, price}=product

    const handleCard=(product)=>{
        addCard(product)
        setIsCard(true)
      
    }
    useEffect(()=>{
        const singleProduct= allProductData.find(oneProduct => oneProduct.product_id == id)
        setProduct(singleProduct)
        const cards= getAllCard()
        const isExist= cards.find(item=>item.product_id == singleProduct.product_id)
        if(isExist){
            setIsCard(true)
        }
    },[allProductData, id])
    // const {product_title}=id
    return (
        <div>
            <div className="h-[450px] w-[800px] border-2 border-red-600 mx-auto flex gap-5 p-5 rounded-3xl">
                <div className="w-[40%] h-full border-2 border-yellow-600 rounded-3xl">
                    <img className="w-full h-full bg-cover bg-center rounded-3xl" src={product_image} alt="" />
                </div>
                <div className="w-[60%] space-y-2 h-full border-2 border-green-600 rounded-3xl pl-5 pt-5">
                    <h1 className="text-3xl font-semibold ">{product_title}</h1>
                    <p className="text-[20px] font-semibold">Price: ${price}</p>
                    <div className="bg-[#EAF5E6] text-green-600 w-[100px] border-2 border-green-600 rounded-3xl text-center py-[3px] ">In Stock</div>
                    <h1 className="text-gray-500 font-semibold  ">{description}</h1>
                    <div className="flex gap-2 items-center">
                    <p className="text-[20px] font-semibold">Rating </p>
                    <FaStar className="text-yellow-500"></FaStar>
                    </div>
                    <div className="flex gap-[3px] items-center">
                    <FaStar className="text-yellow-500"></FaStar>
                    <FaStar className="text-yellow-500"></FaStar>
                    <FaStar className="text-yellow-500"></FaStar>
                    <FaStar className="text-yellow-500"></FaStar>
                    <FaStar className="text-yellow-500"></FaStar>
                    <FaRegStar ></FaRegStar>
                   <p className="bg-gray-300 px-3  rounded-3xl"> {rating}</p>

                    </div>
                <button className="bg-[#8B35D2] px-5 py-2 rounded-3xl text-white btn" 
            disabled = {isCard} 
            onClick={()=>handleCard(product)}>Add Card</button>
                </div>
            </div>


            
            
            
        </div>
    );
};

export default CardDetails;