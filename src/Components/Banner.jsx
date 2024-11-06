import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* relative bann */}
            <div className="hero bg-[#9538E2] pt-6 pb-[150px] rounded-2xl mb-[300px] relative">

                {/* nav section s style */}
                <div className='absolute w-full h-[150px] bg-[#9538E2] -top-[150px] -z-10'>

                </div>



                {/* nav section end style */}



  <div className="hero-content text-center">
    <div className="px-20">
      <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 px-28 text-white font-semibold text-xl">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn bg-white text-[#9538E2] font-semibold">Shop now</button>

    </div>
    {/* Absolute banner */}
    <div className='absolute p-4 bg-white/30 mt-[650px] rounded-3xl border-2 border-white h-[350px]  w-[700px] border-2 border-red-600'>
        <div className='w-full h-full'> 
        <img className=' rounded-3xl w-full h-full' src={'https://i.ibb.co.com/hLjZgPd/banner.jpg'} alt="" />
        </div>
      </div>
  </div>
</div>

            
            
        </div>
    );
};

export default Banner;