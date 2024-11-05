import { NavLink } from "react-router-dom";


const Categories = ({categories}) => {
    return (
        <div>

<div role="tablist" className=" flex flex-col justify-center items-center tabs tabs-boxed">
  {
    categories.map(category=>(
        <NavLink to={`/category/${category.category}`} role="tab" key={category.category} className="tab">{category.category}</NavLink>

    ))}
  
</div>
            
        </div>
    );
};

export default Categories;