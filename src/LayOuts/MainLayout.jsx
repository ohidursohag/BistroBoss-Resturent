import { Outlet, useNavigation } from "react-router-dom";
import NavLinks from "../Components/Shared/Header/NavLinks";
import MyFooter from "../Components/Shared/Footer/MyFooter";
import NavBar from "../Components/Shared/Header/NavBar";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";


const MainLayout = () => {
   const navigation = useNavigation()
   return (
      <div className="drawer drawer-end">
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <NavBar/>
            {/* Page content here */}
            <div className="min-h-[calc(100vh-424px)]">
               {
                  navigation.state === 'loading'
                     ? <LoadingAnimation />
                     : <Outlet />
               }
               
            </div>
            <MyFooter/>
         </div>
         <div className="drawer-side " >
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></label>
            <ul className=" items-center bg-black/50 mt-[87px] p-4 w-60 md:w-80  min-h-full bg-base-200">
               {/* Sidebar content here */}
               <div className="flex flex-col gap-5 mt-10 items-center  ">
                  <NavLinks />
              </div>
            </ul>
         </div>
      </div>


      // <div>
      //    <div>
      //       <NavBar/>
      //    </div>
      //    <div>
      //       <Outlet/>
      //    </div>
      //    <div>
      //       <MyFooter/>
      //    </div>
      // </div>
   )}
export default MainLayout;