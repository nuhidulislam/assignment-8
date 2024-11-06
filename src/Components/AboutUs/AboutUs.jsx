import { useEffect, useState } from "react";
import { getAllCard, removeProduct } from "../../utility";

import DeleteCard from "../DeleteCard";
import { useLoaderData } from "react-router-dom";



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
    return (
        <div>
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