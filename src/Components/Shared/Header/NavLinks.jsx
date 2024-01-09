import { NavLink } from "react-router-dom";
import useUserRole from "../../../Hooks/useUserRole";

const NavLinks = () => {
   const { role } = useUserRole()
   console.log(role);
   return (
      <>
         <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#EEFF25] underline font-extrabold text-xl ' : 'text-white font-extrabold text-xl'}>HOME</NavLink>
         <NavLink to='/contact-us' className={({ isActive }) => isActive ? 'text-[#EEFF25] underline font-extrabold text-xl ' : 'text-white font-extrabold text-xl'}>CONTACT US</NavLink>
         
         <NavLink to={role === 'admin' ? '/Dashboard/admin/home' :'/Dashboard/user/home'} className={({ isActive }) => isActive ? 'text-[#EEFF25] underline font-extrabold text-xl ' : 'text-white font-extrabold text-xl'}>DASHBOARD</NavLink>
         <NavLink to='/our-menu' className={({ isActive }) => isActive ? 'text-[#EEFF25] underline font-extrabold text-xl ' : 'text-white font-extrabold text-xl'}>OUR MENU</NavLink>
         <NavLink to='/our-shop/salad' className={({ isActive }) => isActive ? 'text-[#EEFF25] underline font-extrabold text-xl ' : 'text-white font-extrabold text-xl'}>OUR SHOP</NavLink>
      </>
   )
   }
export default NavLinks;