import { useLoaderData } from "react-router-dom";
import Card from "../Card";
import { AiFillSliders } from "react-icons/ai";
import { useState } from "react";


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
        <div className="flex justify-between items-center mb-5">
            <div > <h1 className="text-2xl font-semibold">Cart</h1></div>
            <div className="flex gap-5 items-center">
                <h1 className="text-2xl font-semibold">Total Cost:</h1>
                <button onClick={()=>handleByPrice('pricee')} className="btn border-2 bg-transparent text-[#9538E2] border-[#9538E2] rounded-3xl px-5">Sort By Price  <AiFillSliders /></button>
                <button className="btn bg-[#9538E2] text-white rounded-3xl px-5">Purchase </button>
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