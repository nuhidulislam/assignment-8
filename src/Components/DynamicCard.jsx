import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "./categories";


const DynamicCard = () => {
    const categories= useLoaderData()
    console.log(categories)
    return (
        <div className="h-full w-full ">
            <div>
                <h1 className="text-center font-bold text-3xl ">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className=" w-full h-full p-10 flex">
                <div className="w-[30%] h-full ">
                    <Categories ></Categories>

                
                </div>
                <div className="w-[70%] h-full "></div>
                <Outlet></Outlet>
                
            </div>

            
        </div>
    );
};

export default DynamicCard;