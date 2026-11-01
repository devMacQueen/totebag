import { LuShoppingCart, LuUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Link } from "react-router";

function Nav() {
  return (
    <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-5 py-4 py-5">
      <div className="hidden md:flex gap-6">
        <NavLink to={"/"} 

        className={({ isActive }) =>
          `border-b-2  ${isActive ? "border-[#001515]" : "hover:border-[#001515] border-transparent"}`}>Home</NavLink>
        <NavLink to={"/shop"} 
        className={({isActive}) =>
          `border-b-2  ${isActive ? "border-[#001515]" : "hover:border-[#001515] border-transparent"}`}>Shop</NavLink>
         
      </div>

      <div>
        <a href="#" className="font-light text-2xl md:text-4xl text-[#001515]">
          thetotebagshop<sup>®</sup>
        </a>
      </div>

      <div className="flex items-center gap-4 text-xl">
        <LuUser className="block" />
        
        <Link to={"/Checkout"} ><LuShoppingCart /> </Link>
        <RxHamburgerMenu className="md:hidden" />
      </div>
    </nav>
  );
}

export default Nav;