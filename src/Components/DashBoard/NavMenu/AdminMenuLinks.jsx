import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaBook,  FaUsers } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";

const AdminMenuLinks = () => {
   return(
      <>
         <div className="flex flex-col gap-6 text-lg mb-10  ml-[70px]">
            <NavLink to='/Dashboard/admin/home' className={({ isActive }) => isActive ? ' text-white font-medium  ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><IoMdHome size={24} /></span>
                  <span>Admin Home</span>
               </span>
            </NavLink>
            <NavLink to='/Dashboard/admin/add-items' className={({ isActive }) => isActive ? ' text-white font-medium ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><GiForkKnifeSpoon size={24} /></span>
                  <span>Add Items</span>
               </span>
            </NavLink>
            <NavLink to='/Dashboard/admin/manage-items' className={({ isActive }) => isActive ? ' text-white font-medium ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><TfiMenuAlt size={24} /></span>
                  <span>Manage Items</span>
               </span>
            </NavLink>
            <NavLink to='/Dashboard/admin/manage-bookings' className={({ isActive }) => isActive ? ' text-white   font-medium ' : ' font-medium '}>
               <span className="flex gap-2 items-center">
                  <span><FaBook size={24} /></span>
                  <span>Manage Bookings</span>
               </span>
            </NavLink>
            <NavLink to='/Dashboard/Admin/all-users' className={({ isActive }) => isActive ? ' text-white font-medium ' : ' font-medium'}>
               <span className="flex gap-2 items-center">
                  <span><FaUsers size={24} /></span>
                  <span>All Users</span>
               </span>
            </NavLink>
            
         </div>
      </>
   )}
export default AdminMenuLinks;