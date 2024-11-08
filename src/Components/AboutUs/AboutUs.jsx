import { useEffect, useState } from "react";
import { getAllCard, removeProduct } from "../../utility";

import DeleteCard from "../DeleteCard";
import { useLoaderData } from "react-router-dom";
import { AiFillSliders } from "react-icons/ai";
import { Helmet } from "react-helmet-async";



const AboutUs = () => {
    const products= useLoaderData()
    
  
    const [productType, setProductType]=useState([])
    useEffect(()=>{
        const cards=getAllCard()
        setProductType(cards)
    },[])

    const handleRemove=product_id=>{
        removeProduct(product_id)

        const cards=getAllCard()
        setProductType(cards)
    }

 const productts= getAllCard()
 let totalPrice = productts.reduce((sum, product) => {
    return sum + product.price;
  }, 0); // শুরুতে sum ০ হবে
  
  console.log("Total Cost " + totalPrice);
    
  
    return (
        <div>
            <Helmet>
                <title>Gadget/Dashboard</title>
            </Helmet>
            <div className=" w-full h-[300px] bg-[#9538E2] text-center pt-8 mb-5">
                    <h1 className="text-5xl text-white font-bold">Dashboard</h1>
                    <p className=" pt-3 text-[18px]  text-white">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
                    <div className="mt-6">
                        <button  className="bg-white px-8 font-semibold py-2 text-2xl rounded-3xl text-black">Card</button>
                    </div>
                </div>

                <div className="flex max-w-6xl mx-auto justify-between items-center mb-5">
            <div > <h1 className="text-2xl font-semibold">Cart</h1></div>
            <div className="flex gap-5 items-center">
                <h1 className="text-2xl font-bold">Total cost: {totalPrice}</h1>
                <button  className="btn border-2 bg-transparent text-[#9538E2] border-[#9538E2] rounded-3xl px-5">Sort By Price  <AiFillSliders /></button>
                <button className="btn bg-[#9538E2] text-white rounded-3xl px-5">Purchase </button>
            </div>
        </div>

            <div className="grid grid-cols-1  gap-4">
            {
                productType.map(singleProduct=>(
                    <DeleteCard handleRemove={handleRemove} singleProduct={singleProduct} key={singleProduct.product_id}></DeleteCard>
                ))
            }
            
            
        </div>
            
        </div>
    );
};

export default AboutUs;