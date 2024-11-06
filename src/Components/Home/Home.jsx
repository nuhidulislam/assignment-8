import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Categories from "../categories";



const Home = () => {
    const categories= useLoaderData()
   
    return (
        <div>
            {/* Banner Start */}
            <Banner></Banner>
            {/* Banner End */}



            <div className="flex gap-5 ">
                <div className="w-[30%] h-full ">
                <Categories categories={categories}></Categories>
                </div>
                <div className="w-[70%] h-full mb-5"> 
                <Outlet></Outlet>
                </div>
            </div>
            
           

            


            {/* <DynamicCard></DynamicCard> */}

            
        </div>
    );
};

export default Home;