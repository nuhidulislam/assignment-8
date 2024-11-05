import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const {id}= useParams()
    const allProductData= useLoaderData()
    console.log(allProductData)
    const [product, setProduct]= useState({})
    useEffect(()=>{
        const singleProduct= allProductData.find(oneProduct => oneProduct.product_id == id)
        setProduct(singleProduct)
    },[])
    // const {product_title}=id
    return (
        <div>
            <h1>CardDetails {product.product_title}</h1>
            <button></button>
            
        </div>
    );
};

export default CardDetails;