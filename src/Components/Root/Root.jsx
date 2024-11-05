import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBer from "../NavBer/NavBer";


const Root = () => {
    return (
        <div >
            <NavBer></NavBer>
            <div className="">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Root;