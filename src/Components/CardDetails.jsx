import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCard, getAllCard } from "../utility";


const CardDetails = () => {
    const {id}= useParams()
    const allProductData= useLoaderData()
   
    const [product, setProduct]= useState({})
    const {product_title}=product
    const handleCard=(product)=>{
        addCard(product)
      
    }
    useEffect(()=>{
        const singleProduct= allProductData.find(oneProduct => oneProduct.product_id == id)
        setProduct(singleProduct)
    },[allProductData, id,])
    // const {product_title}=id
    return (
        <div>
            <h1>CardDetails {product_title}</h1>
            <button onClick={()=>handleCard(product)}>Add Card</button>
            
        </div>
    );
};

export default CardDetails;