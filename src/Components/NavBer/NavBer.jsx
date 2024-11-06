import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


const NavBer = () => {
    return (
        <div className="navbar bg-white/30 z-50 fixed backdrop-blur-xl ">
  <div className="navbar-start">
    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> */}
    <Link to='/' className="btn btn-ghost text-3xl">Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-7 ">
      <NavLink to='/' className={({ isActive }) => `text-[18px] ${isActive?'text-yellow-500 text-[22px] text-bold':'hover:text-warning'}`
        }>Home</NavLink>
      <NavLink to='/statistics' className={({ isActive }) => `text-[18px] ${isActive?'text-yellow-500 text-[22px] text-bold':'hover:text-warning'}`
        }>Statistics</NavLink>
      <NavLink to='/Dashboard' className={({ isActive }) => `text-[18px] ${isActive?'text-yellow-500 text-[22px] text-bold':'hover:text-warning'}`
        }>View All</NavLink>
        <NavLink to='/AboutUs' className={({ isActive }) => `text-[18px] ${isActive?'text-yellow-500 text-[22px] text-bold':'hover:text-warning'}`
        }>Dashboard</NavLink>
    </ul>
  </div>
  <div className="navbar-end flex gap-4 mr-5 text-[20px]" >
    <button><FaRegHeart></FaRegHeart></button>
    <button><MdOutlineShoppingCart></MdOutlineShoppingCart></button>
  </div>
</div>
    );
};

export default NavBer;