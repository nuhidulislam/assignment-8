import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductsCard = () => {
    const navigate= useNavigate()
    const product = useLoaderData()

    // console.log(product)
    
    
   
    const {category}= useParams()
    
    

    const [productType, setProductType] = useState([])
    
    
    useEffect(()=>{
       
            if(category){
                const filteredByCategory = [...product].filter(productItem => productItem.category==category)
        setProductType(filteredByCategory)
            }else{
                setProductType(product.slice(0,6))
            }
        
    },[product, category ])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                productType.map(singleProduct=>(
                    <Card singleProduct={singleProduct} key={singleProduct.product_id}></Card>
                ))
            }
            
            
        </div>
        <button className="btn btn-warning" onClick={()=>navigate('/dashboard')}>View All</button>
        </div>
    );
};

export default ProductsCard;