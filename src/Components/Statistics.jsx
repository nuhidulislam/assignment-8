import React from 'react';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget/Statistics</title>
            </Helmet>

<div className=" w-full h-[300px] bg-[#9538E2] text-center pt-8 mb-5">
                    <h1 className="text-5xl text-white font-bold">Statistics</h1>
                    <p className=" pt-3 text-[18px]  text-white">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
                    
                </div>
            <div className=' w-[1000px] h-[400px] mx-auto'>
                <img className='h-full w-full bg-center bg-cover' src={'https://i.ibb.co.com/VgPgHh2/Screenshot-2024-11-06-173211.png'} alt="" />
            </div>
        </div>
    );
};

export default Statistics;