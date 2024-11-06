import { NavLink } from "react-router-dom";


const Categories = ({ categories }) => {
    return (
        <div>
            <div role="tablist" className=" flex flex-col justify-center items-center tabs tabs-boxed  gap-3">
                {
                    categories.map(category => (
                        <NavLink to={`/category/${category.category}`} role="tab" key={category.category} className={({ isActive }) => `tab text-[16px] font-semibold px-4  ${isActive ? 'tab-active' : ''}`}>{category.category}</NavLink>
                    ))}
            </div>
        </div>
    );
};

export default Categories;