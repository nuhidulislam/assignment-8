import { useLoaderData } from "react-router-dom";
import Card from "../Card";
import { AiFillSliders } from "react-icons/ai";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    
    const product=useLoaderData()
   
   
   
    // console.log(product)
    const [item, setItem]=useState(product)
    const handleByPrice= byPrice =>{
        if(byPrice == 'pricee'){
            const sorted= [...product].sort((a,b)=> b.price - a.price)
            console.log(sorted)
            setItem(sorted)
            

        }
    }
    return (
       <div className="max-w-6xl mx-auto">
        <Helmet>
                <title>Gadget/Product-card</title>
            </Helmet>
        <div className=" w-full h-[300px] bg-[#9538E2] text-center pt-8 mb-5">
                    <h1 className="text-5xl text-white font-bold">Our All Products</h1>
                    <p className=" pt-3 text-[18px]  text-white"> Welcome to your shop. <br />Here you can see all our product. If you want you can sort by price . <br /> We can ensure our all prduct is good enough. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit corrupti perspiciatis quibusdam dolore dicta. Quibusdam est ipsam qui at veritatis. </p>
                    
                </div>
        <div className="flex justify-between items-center mb-5">
            <div > <h1 className="text-2xl font-semibold">Cart</h1></div>
            <div className="flex gap-5 items-center">
                
                <button onClick={()=>handleByPrice('pricee')} className="btn border-2 bg-transparent text-[#9538E2] border-[#9538E2] rounded-3xl px-5">Sort By Price  <AiFillSliders /></button>
                {/* <button className="btn bg-[#9538E2] text-white rounded-3xl px-5">Purchase </button> */}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                item.map(singleProduct=>(
                    <Card singleProduct={singleProduct} key={singleProduct.product_id}></Card>
                ))
            }
            
            
        </div>
       </div>
    );
};

export default Dashboard;