
import { FaHome } from 'react-icons/fa';
import error from '../assets/404.gif'
import { Link } from 'react-router-dom';
const Error = () => {
   return(
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
         <img src={error} alt="" />
         
         <div className="  my-5">
            <Link to='/' className="btn normal-case bg-gradient-to-r from-[#835D23] to-[#B58130] mb-16 rounded-none text-center">
               <span className="text-lg text-white">Back to Home</span>
               <FaHome size={26} color="white" />
            </Link>
         </div>
      </div>
   )}
export default Error;