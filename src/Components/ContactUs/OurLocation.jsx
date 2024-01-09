import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import Title from "../Shared/UtilitiesCompnents/Title";
import Container from "../Shared/UtilitiesCompnents/Container";


const OurLocation = () => {
   return(
      <Container className={'mb-[100px]'}>
         <Title titleHeader="---Visit Us---" title="OUR LOCATION" />
         <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            <div className="shadow h-[300px]  col-span-1">
               <div className="bg-[#D1A054] flex justify-center py-3 items-center ">
                  <FaPhoneVolume color="white" size={32} />
               </div>
               <div className=" mx-8  bg-[#F3F3F3] h-[calc(100%-86px)] flex justify-center items-center">
                  <div className="text-center ">
                     <h4 className="text-2xl font-medium mb-2">PHONE</h4>
                     <p className="text-[#444444] font-medium ">+38 (012) 34 56 789</p>
                  </div>
               </div>
            </div>
            <div className="shadow h-[300px]  col-span-1">
               <div className="bg-[#D1A054] flex justify-center py-3 items-center ">
                  <FaLocationDot color="white" size={32} />
               </div>
               <div className=" mx-8  bg-[#F3F3F3] h-[calc(100%-86px)] flex justify-center items-center">
                  <div className="text-center ">
                     <h4 className="text-2xl font-medium mb-2">ADDRESS</h4>
                     <p className="text-[#444444] font-medium ">
                        <span> Mon - Fri: 08:00 - 22:00</span> <br />
                        <span>Sat - Sun: 10:00 - 23:00</span>
                     </p>
                  </div>
               </div>
            </div>
            <div className="shadow h-[300px]  col-span-1">
               <div className="bg-[#D1A054] flex justify-center py-3 items-center ">
                  <IoTimeSharp color="white" size={32} />
               </div>
               <div className=" mx-8  bg-[#F3F3F3] h-[calc(100%-86px)] flex justify-center items-center">
                  <div className="text-center ">
                     <h4 className="text-2xl font-medium mb-2">WORKING HOURS</h4>
                     <p className="text-[#444444] font-medium ">
                        <span> Mon - Fri: 08:00 - 22:00</span> <br />
                        <span>Sat - Sun: 10:00 - 23:00</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </Container>
   )}
export default OurLocation;