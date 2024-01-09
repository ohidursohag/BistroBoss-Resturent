import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaCalendarAlt, FaCalendarCheck} from "react-icons/fa";
import {  GiWallet } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { Gi3DMeeple } from "react-icons/gi";

const UserMenuLinks = () => {
   return(
      <>
         <div className="flex flex-col gap-6 text-lg mb-10  ml-[70px]">
            <NavLink to='/Dashboard/user/home' className ={({ isActive }) => isActive ? ' text-white font-medium  ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><IoMdHome size={24} /></span>
                  <span>User Home</span>
               </span>
            </NavLink>
            <NavLink to='/Dashboard/user/reservstion' className={({ isActive }) => isActive ? ' text-white font-medium ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><FaCalendarAlt size={24} /></span>
                  <span>reservation</span>
               </span>
            </NavLink>
            <NavLink to='/Dashboard/user/payment-history' className={({ isActive }) => isActive ? ' text-white font-medium ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><GiWallet size={24} /></span>
                  <span>payment history</span>
               </span>
            </NavLink>
            <NavLink to='/Dashboard/user/my-cart' className={({ isActive }) => isActive ? ' text-white   font-medium ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><FaCartShopping size={24} /></span>
                  <span>My Cart</span>
               </span>
            </NavLink>
            <NavLink to='/Dashboard/user/add-review' className={({ isActive }) => isActive ? ' text-white font-medium ' : ' font-medium'}>
               <span className="flex gap-2 items-center">
                  <span><Gi3DMeeple size={24} /></span>
                  <span>Add Review</span>
               </span>
            </NavLink>
            <NavLink to='/Dashboard/user/my-booking' className={({ isActive }) => isActive ? ' text-white font-medium ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><FaCalendarCheck size={24} /></span>
                  <span>My Booking</span>
               </span>
            </NavLink>
         </div>
      </>
   )}
export default UserMenuLinks;