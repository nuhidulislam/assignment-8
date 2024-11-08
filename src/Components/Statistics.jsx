import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Statistics = () => {
    const product = useLoaderData()
    const price= product.price
    console.log(price)
    

    return (
        <div>
            <Helmet>
                <title>Gadget/Statistics</title>
            </Helmet>

<div className=" w-full h-[300px] bg-[#9538E2] text-center pt-8 mb-5 ">
                    <h1 className="text-5xl text-white font-bold">Statistics</h1>
                    <p className=" pt-3 text-[18px]  text-white">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
                    
                </div>
            <div className=' w-[1000px] h-[400px] mx-auto'>

            <BarChart width={800} height={400} data={product} barSize={29}>
      <Bar dataKey="price" fill="#8884d8" />
      <XAxis dataKey='product_title'></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </BarChart>





            </div>
        </div>
    );
};

export default Statistics;