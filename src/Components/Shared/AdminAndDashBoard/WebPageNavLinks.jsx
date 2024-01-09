import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import {  FaEnvelope } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";

const WebPageNavLinks = () => {
   return(
      <>
         {/* Web Page Menu Links */}
         <div className="flex flex-col  gap-6 text-lg mt-10 ml-[70px]">
            <NavLink to='/' className={({ isActive }) => isActive ? ' text-white   font-medium  ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><IoMdHome size={26} /></span>
                  <span>Home</span>
               </span>
            </NavLink>
            <NavLink to='/our-menu' className={({ isActive }) => isActive ? ' text-white font-medium ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><IoMenu size={24} /></span>
                  <span>Menu</span>
               </span>
            </NavLink>
            <NavLink to='/our-shop/salad' className={({ isActive }) => isActive ? ' text-white font-medium ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><GiShoppingBag size={24} /></span>
                  <span>Shop</span>
               </span>
            </NavLink>
            <NavLink to='/contact-us' className={({ isActive }) => isActive ? ' text-white   font-medium ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><FaEnvelope size={24} /></span>
                  <span>Contact</span>
               </span>
            </NavLink>

         </div>
      </>
   )}
export default WebPageNavLinks;