import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[500px]  space-y-2">
            <h1 className="text-9xl font-bold">Oops!</h1>
            <p className="text-6xl font-semibold pt-3">404- PAGE NOT FOUND</p>
            <p className="text-3xl font-bold ">We are unable to find this page. </p>
            <p className="text-3xl font-bold " >This page is temporarily unavailable. </p>
            <div className="px-6 py-2 bg-green-300 rounded-xl text-2xl font-bold"><Link to='/'>Go To Home Page</Link></div>
        </div>
    );
};

export default ErrorPage;