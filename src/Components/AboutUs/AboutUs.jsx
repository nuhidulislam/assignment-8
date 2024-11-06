import { useEffect, useState } from "react";
import { getAllCard } from "../../utility";

import DeleteCard from "../DeleteCard";
import { useLoaderData } from "react-router-dom";



const AboutUs = () => {
    const products= useLoaderData()
    
  
    const [productType, setProductType]=useState([])
    useEffect(()=>{
        const cards=getAllCard()
        setProductType(cards)
    },[])
    return (
        <div>
            <div className="grid grid-cols-1  gap-4">
            {
                productType.map(singleProduct=>(
                    <DeleteCard singleProduct={singleProduct} key={singleProduct.product_id}></DeleteCard>
                ))
            }
            
            
        </div>
            
        </div>
    );
};

export default AboutUs;