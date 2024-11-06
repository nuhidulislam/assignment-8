
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCard, getAllCard } from "../utility";


const CardDetails = () => {
    const {id}= useParams()
    const allProductData= useLoaderData()
   
    const [product, setProduct]= useState({})
    const [isCard, setIsCard]= useState(false)
    const {product_title}=product
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
            <h1>CardDetails {product_title}</h1>
            <button className="bg-[#8B35D2] px-5 py-2 rounded-3xl text-white btn" 
            disabled = {isCard} 
            onClick={()=>handleCard(product)}>Add Card</button>
            
        </div>
    );
};

export default CardDetails;