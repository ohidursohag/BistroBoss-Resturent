import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ProfileSigninBtn from "./ProfileSigninBtn";
const NavBar = () => {
   return (
      <div className="fixed z-10 w-full shadow-sm">
         <div className="w-full lg:px-10 py-5 flex items-center justify-between bg-black/20 backdrop-blur-sm ">
            <div className=" px-2 mx-2">
               <Logo logoClass={'text-white'}/>
            </div>
            <div className="flex-1 hidden lg:block">
               <div className="flex justify-center gap-5">
                  <NavLinks />
               </div>
            </div>
            <div className=" flex gap-2 items-center justify-end">
               <ProfileSigninBtn />
               <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
               </div>
            </div>

         </div>
      </div>
   )
}
export default NavBar;