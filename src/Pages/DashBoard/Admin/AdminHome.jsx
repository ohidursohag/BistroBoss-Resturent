
import { GiWallet } from "react-icons/gi";
import { Helmet } from "react-helmet-async";
import { FaUsers } from "react-icons/fa";
import HeaderStatusBox from "../../../Components/Shared/AdminAndDashBoard/HeaderStatusBox";


const AdminHome = () => {
   return(
      <div>
         <Helmet>
            <title>Bistro Boss | User Home</title>
         </Helmet>
         <h1 className="text-3xl font-semibold font-cinzel mb-2">HI, WelCome Back</h1>
         {/* Status Boxes */}
         <div className="grid grid-cols-4 gap-5">
            <HeaderStatusBox
               className={'bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]'}
               value={252}
               statusName={'Revenue'}
            >
               <GiWallet size={52} />
            </HeaderStatusBox>
            <HeaderStatusBox
               className={'bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]'}
               value={1200}
               statusName={'Customers'}
            >
               <FaUsers size={52} />
            </HeaderStatusBox>
            <HeaderStatusBox
               className={'bg-gradient-to-r from-[#FE4880] to-[#FECDE9]'}
               value={105}
               statusName={'Products'}
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 50 50" fill="none">
                  <path d="M16.0992 34.779L12.9905 35.37C10.054 35.9284 7.84856 38.0415 7.36418 40.7573L5.79319 48.234C5.70236 48.6658 5.81125 49.1156 6.08938 49.4583C6.3675 49.801 6.78528 50 7.22658 50H17.1874V42.3817C17.1874 41.8596 17.4654 41.3769 17.917 41.1147L22.6646 38.3596C20.1099 37.868 17.8327 36.5864 16.0992 34.779Z" fill="white" />
                  <path d="M44.2069 48.2335L42.6331 40.7558C42.1482 38.0407 39.9426 35.9284 37.0065 35.3706L33.8994 34.7804C32.7402 35.9886 31.3377 36.9612 29.7722 37.6206C29.7648 37.6251 20.1171 43.2253 20.1171 43.2253V50H42.7734C43.2148 50 43.6327 49.801 43.9108 49.4581C44.189 49.1153 44.2978 48.6654 44.2069 48.2335ZM25.4883 46.4845H24.5118C23.7028 46.4845 23.0469 45.8286 23.0469 45.0196C23.0469 44.2106 23.7028 43.5548 24.5118 43.5548H25.4883C26.2973 43.5548 26.9532 44.2106 26.9532 45.0196C26.9532 45.8286 26.2973 46.4845 25.4883 46.4845Z" fill="white" />
                  <path d="M15.5761 16.8354H34.4238V19.7827H15.5761V16.8354Z" fill="white" />
                  <path d="M15.5761 12.2467V13.9057H34.4238V12.2467C36.3204 11.3479 37.5622 9.4166 37.5622 7.28857C37.5622 4.26465 35.102 1.80449 32.078 1.80449C31.3682 1.80449 30.6636 1.94297 30.0103 2.2084C28.7256 0.798047 26.9305 0 25 0C23.0694 0 21.2743 0.797949 19.9896 2.2083C19.3363 1.94287 18.6317 1.80439 17.9218 1.80439C14.8979 1.80439 12.4377 4.26455 12.4377 7.28848C12.4377 9.4166 13.6795 11.3479 15.5761 12.2467Z" fill="white" />
                  <path d="M25 35.6525C30.187 35.6525 34.407 31.4326 34.407 26.2456V22.7124H15.593V26.2456C15.593 31.4326 19.8129 35.6525 25 35.6525Z" fill="white" />
               </svg>
            </HeaderStatusBox>
            <HeaderStatusBox
               className={'bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]'}
               value={500}
               statusName={'Orders'}
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <g clipPath="url(#clip0_4_319)">
                     <path d="M43.1818 15.9091H36.3636V6.81818H4.54549C2.03406 6.81818 0 8.85224 0 11.3637V36.3637H4.54549C4.54549 40.1251 7.60228 43.1819 11.3637 43.1819C15.1251 43.1819 18.1819 40.1251 18.1819 36.3637H31.8182C31.8182 40.1251 34.875 43.1819 38.6364 43.1819C42.3978 43.1819 45.4546 40.1251 45.4546 36.3637H50.0001V25.0001L43.1818 15.9091ZM11.3637 39.7727C9.47728 39.7727 7.95459 38.25 7.95459 36.3636C7.95459 34.4772 9.47728 32.9545 11.3637 32.9545C13.2501 32.9545 14.7728 34.4772 14.7728 36.3636C14.7728 38.25 13.25 39.7727 11.3637 39.7727ZM38.6364 39.7727C36.75 39.7727 35.2273 38.25 35.2273 36.3636C35.2273 34.4772 36.75 32.9545 38.6364 32.9545C40.5228 32.9545 42.0455 34.4772 42.0455 36.3636C42.0455 38.25 40.5227 39.7727 38.6364 39.7727ZM36.3636 25.0001V19.3183H42.0454L46.5113 25.0001H36.3636Z" fill="white" />
                  </g>
                  <defs>
                     <clipPath id="clip0_4_319">
                        <rect width="50" height="50" fill="white" />
                     </clipPath>
                  </defs>
               </svg>
            </HeaderStatusBox>
         </div>
      </div>
   )}
export default AdminHome;