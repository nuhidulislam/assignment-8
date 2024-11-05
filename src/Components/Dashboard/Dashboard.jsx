import { useLoaderData } from "react-router-dom";
import Card from "../Card";


const Dashboard = () => {
    const product=useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                product.map(singleProduct=>(
                    <Card singleProduct={singleProduct} key={singleProduct.product_id}></Card>
                ))
            }
            
            
        </div>
    );
};

export default Dashboard;