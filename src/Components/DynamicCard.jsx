import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "./categories";


const DynamicCard = () => {
    const categories= useLoaderData()
    console.log(categories)
    return (
        <div className="h-full w-full border-2  border-red-500">
            <div>
                <h1 className="text-center font-bold text-3xl ">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="border-2  border-red-500 w-full h-full p-10 flex">
                <div className="w-[30%] h-full border-2 border-green-600">
                    <Categories ></Categories>

                
                </div>
                <div className="w-[70%] h-full border-2 border-yellow-900"></div>
                <Outlet></Outlet>
                
            </div>

            
        </div>
    );
};

export default DynamicCard;