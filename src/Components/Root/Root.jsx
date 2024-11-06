import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBer from "../NavBer/NavBer";
import  { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div >
           
           
            <div className="h-24">
            <Toaster></Toaster>
            <NavBer></NavBer>

            </div>
            <div className="">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Root;