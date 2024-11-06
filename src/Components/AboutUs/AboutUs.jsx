import { useEffect, useState } from "react";
import { getAllCard } from "../../utility";
import Card from "../Card";


const AboutUs = () => {
    const [productType, setProductType]=useState([])
    useEffect(()=>{
        const cards=getAllCard()
        setProductType(cards)
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                productType.map(singleProduct=>(
                    <Card singleProduct={singleProduct} key={singleProduct.product_id}></Card>
                ))
            }
            
            
        </div>
            
        </div>
    );
};

export default AboutUs;