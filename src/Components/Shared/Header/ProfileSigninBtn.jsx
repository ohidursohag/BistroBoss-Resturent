import { Link, NavLink } from "react-router-dom";
import ProfileAndDropDown from "./ProfileAndDropDown";
import useAuth from "../../../Hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCartItems from "../../../Hooks/useCartItems";

const ProfileSigninBtn = () => {
   const { user } = useAuth();
   const { data:cartItems } = useCartItems()
   // console.log(data);
   // console.log(data);
   return (
      <div className="flex items-center gap-5">
         {
            user
               ?
               <div className="flex items-center gap-8">
                  <Link to='/dashboard/user/my-cart'>
                     <div className="indicator cursor-pointer">
                        <span className="indicator-item badge badge-secondary">{cartItems?.length}</span>
                        <FaShoppingCart size={36} color="white" />
                     </div>
                  </Link>
                  <div className="flex justify-center items-center md:mt-0">
                     <ProfileAndDropDown></ProfileAndDropDown>
                  </div>
               </div>
               : <NavLink to={`/login`} className={({ isActive }) => isActive ? 'text-[#EEFF25] underline font-extrabold text-xl ' : 'text-white font-extrabold text-xl'}>
                  LOGIN
               </NavLink>
         }        
      </div>
   )
}
export default ProfileSigninBtn;