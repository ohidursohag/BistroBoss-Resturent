import { GiWallet } from "react-icons/gi";
import HeaderStatusBox from "../../../Components/Shared/AdminAndDashBoard/HeaderStatusBox";
import { FaCalendarCheck, FaCartShopping, FaPhoneVolume, FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const UserHome = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | User Home</title>
         </Helmet>
         <h1 className="text-3xl font-semibold font-cinzel mb-2">HI, WelCome Back</h1>
         {/* Status Boxes */}
         <div className="grid grid-cols-3 gap-5">
            <HeaderStatusBox
               className={'bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]'}
               value={252}
               statusName={'Menu'}
            >
               <GiWallet size={52} />
            </HeaderStatusBox>
            <HeaderStatusBox
               className={'bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]'}
               value={103}
               statusName={'Shop'}
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 50 50" fill="none">
                  <path d="M49.9531 16.8094L47.125 5.49062C46.7781 4.1 45.5281 3.125 44.0938 3.125H5.90938C4.475 3.125 3.225 4.1 2.875 5.49062L0.046875 16.8094C0.015625 16.9313 0 17.0594 0 17.1875C0 21.4937 3.32813 25 7.42188 25C9.8 25 11.9219 23.8156 13.2812 21.9781C14.6406 23.8156 16.7625 25 19.1406 25C21.5187 25 23.6406 23.8156 25 21.9781C26.3594 23.8156 28.4781 25 30.8594 25C33.2406 25 35.3594 23.8156 36.7188 21.9781C38.0781 23.8156 40.1969 25 42.5781 25C46.6719 25 50 21.4937 50 17.1875C50 17.0594 49.9844 16.9313 49.9531 16.8094Z" fill="white" />
                  <path d="M42.5781 28.1251C40.45 28.1251 38.4281 27.4751 36.7188 26.2876C33.3 28.6657 28.4188 28.6657 25 26.2876C21.5812 28.6657 16.7 28.6657 13.2812 26.2876C11.5719 27.4751 9.55 28.1251 7.42188 28.1251C5.8875 28.1251 4.44062 27.7657 3.125 27.1532V43.7501C3.125 45.4751 4.525 46.8751 6.25 46.8751H18.75V34.3751H31.25V46.8751H43.75C45.475 46.8751 46.875 45.4751 46.875 43.7501V27.1532C45.5594 27.7657 44.1125 28.1251 42.5781 28.1251Z" fill="white" />
               </svg>
            </HeaderStatusBox>
            <HeaderStatusBox
               className={'bg-gradient-to-r from-[#FE4880] to-[#FECDE9]'}
               value={252}
               statusName={'Menu'}
            >
               <FaPhoneVolume size={52} />
            </HeaderStatusBox>
         </div>


         <div className="h-[600px] flex my-10">
            <div className="flex-1 bg-[#FFEDD5] flex flex-col justify-center items-center gap-5">
               <figure className=" w-[190px] h-[190px] rounded-full overflow-hidden border-2 border-[#D1A054] ">
                  <img className="" src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" alt="" />
               </figure>
               <div className="text-3xl font-semibold font-cinzel">Awlad Hossain</div>
            </div>
            <hr className="border-2 border-[#D1A054] h-full" />
            <div className="flex-1 bg-[#FEF9C3] flex justify-center items-center">
               <div>
                  <div className="text-[40px] font-cinzel font-semibold mb-3">Your Activities</div>
                  <div className="text-2xl font-bold uppercase font-cinzel flex flex-col gap-2">
                     <NavLink to='/Dashboard/user/my-cart' className='text-[#0088FE] '>
                        <span className="flex gap-2 items-center">
                           <span><FaCartShopping size={24} /></span>
                           <span>Orders: </span>
                           <span>6</span>
                        </span>
                     </NavLink>
                     <NavLink to='/Dashboard/user/add-review' className='text-[#00C4A1]'>
                        <span className="flex gap-2 items-center">
                           <span><FaStar size={24} /></span>
                           <span>Reviews: </span>
                           <span>2</span>
                        </span>
                     </NavLink>
                     <NavLink to='/Dashboard/user/my-booking' className='text-[#FFBB28]'>
                        <span className="flex gap-2 items-center">
                           <span><FaCalendarCheck size={24} /></span>
                           <span>Bookings: </span>
                           <span>1</span>
                        </span>
                     </NavLink>
                     <NavLink to='/Dashboard/user/payment-history' className='text-[#FF8042]'>
                        <span className="flex gap-2 items-center">
                           <span><GiWallet size={24} /></span>
                           <span>Payment: </span>
                           <span>6</span>
                        </span>
                     </NavLink>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}
export default UserHome;