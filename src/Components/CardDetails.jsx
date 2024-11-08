
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCard, getAllCard } from "../utility";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


const CardDetails = () => {
    const {id}= useParams()
    const allProductData= useLoaderData()
   
    const [product, setProduct]= useState({})
    const [isCard, setIsCard]= useState(false)


    const {product_id,Specification,rating,description, product_title, product_image, price}=product

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
            
            <div className=" relative w-full h-[300px] bg-[#9538E2]">
                <div className=" w-full h-[300px] bg-[#9538E2] text-center pt-8">
                    <h1 className="text-5xl text-white font-bold">Product Details</h1>
                    <p className=" pt-3 text-[18px]  text-white">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
                </div>
            <div className=" left-[250px] top-[200px] absolute h-[480px] w-[800px]  mx-auto flex gap-5 p-5 rounded-3xl bg-gray-200">
                <div className="w-[40%] h-full  rounded-3xl">
                    <img className="w-full h-full bg-cover bg-center rounded-3xl" src={product_image} alt="" />
                </div>
                <div className="w-[60%] space-y-2 h-full  rounded-3xl pl-5 pt-5">
                    <h1 className="text-3xl font-semibold ">{product_title}</h1>
                    <p className="text-[20px] font-semibold">Price: ${price}</p>
                    <div className="bg-[#EAF5E6] text-green-600 w-[100px]  rounded-3xl text-center py-[3px] ">In Stock</div>
                    <h1 className="text-gray-500 font-semibold  ">{description}</h1>

                   <ul>
                   {
                        Specification && Specification.map(item=>(
                            <li className="list-disc" key={item}>{item}</li>
                        ))
                    }
                   </ul>



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
            onClick={()=>handleCard(product)}> Add Card <FaShoppingCart /></button>
                </div>
            </div>

            </div>
            <div className="h-[500px] ">
            
            </div>


            
            
            
        </div>
    );
};

export default CardDetails;