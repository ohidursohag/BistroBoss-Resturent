import { Outlet } from "react-router-dom";
import Container from "../Components/Shared/UtilitiesCompnents/Container";
import Logo from "../Components/Shared/Header/Logo";
import WebPageNavLinks from "../Components/Shared/AdminAndDashBoard/WebPageNavLinks";
import useUserRole from "../Hooks/useUserRole";
import AdminMenuLinks from "../Components/DashBoard/NavMenu/AdminMenuLinks";
import UserMenuLinks from "../Components/DashBoard/NavMenu/UserMenuLinks";


const DashBord = () => {
   const {role, isLoading} = useUserRole()
   console.log(role);
   if (isLoading) {
      return
   }
   return (

         <Container>
            <div className="grid grid-cols-12 min-h-screen">
               {/* Side Bar */}
               <div className="col-span-3 bg-[#D1A054] py-16">
                  <Logo />
                  <div className="mt-16 font-cinzel uppercase">
                     {
                        role === 'admin'?<AdminMenuLinks/>:<UserMenuLinks/>
                     }                
                     <hr className="text-white border-2 w-[90%] mx-auto" />
                     <WebPageNavLinks/>
                  </div>
               </div>
               {/* DashBoard Contents */}
               <div className="col-span-9 px-5 py-16 bg-[#f6f6f6] ">
                  <Outlet />
               </div>
            </div>
         </Container>

   ) 
}
export default DashBord;