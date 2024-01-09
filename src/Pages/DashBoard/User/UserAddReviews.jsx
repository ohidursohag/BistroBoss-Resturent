import { Rating, RoundedStar } from "@smastrom/react-rating";
import Title from "../../../Components/Shared/UtilitiesCompnents/Title";
import { useState } from "react";
import { MdRocketLaunch } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const UserAddReviews = () => {
   const [rating, setRating] = useState(0);
   return(
      <div>
         <Helmet>
            <title>Bistro Boss | Add Reviews</title>
         </Helmet>
         <Title title="GIVE A REVIEW... " titleHeader="---Sharing is Caring!!!---" titleClassName={'!text-[36px] !py-3'} />
         <div className="py-10 bg-[#F3F3F3] w-[90%] mx-auto shadow">
            <h2 className="text-3xl text-center font-medium font-cinzel">RATE US!</h2>
            <div className="w-[250px] mx-auto my-5">
               <Rating                 
                  value={rating}
                  onChange={setRating}
                  itemStyles={{
                     itemShapes: RoundedStar,
                     activeFillColor: '#f59e0b',
                     inactiveFillColor: '#D0D0D0',
                  }}
               />
            </div>

            <form className="w-[90%] mx-auto my-10">
               <div className='w-full'>
                  <label htmlFor="likedRecipe" className="text-xl font-medium "> Which recipe you liked most?</label>
                  <input type="text" name="likedRecipe" required id="likedRecipe" placeholder="Recipe you liked most" className=" h-[70px] w-full mt-3 mb-5 rounded-[8px]  bg-white px-10  outline-none" />
               </div>
               <div className='w-full'>
                  <label htmlFor="likedRecipe" className="text-xl font-medium ">Do you have any suggestion for us?</label>
                  <input type="text" name="likedRecipe" required id="likedRecipe" placeholder="Sugggestion" className=" h-[70px] w-full mt-3 mb-5 rounded-[8px]  bg-white px-10  outline-none" />
               </div>
               <div>
                  <label htmlFor="message" className="text-xl  font-medium ">Kindly express your care in a short way.</label>
                  <textarea name="message" id="message" placeholder="Review in detail" className="w-full mt-2 h-[200px] bg-white px-10  outline-none pt-5" ></textarea>
               </div>
               <div className="  my-5">
                  <button className="btn normal-case bg-gradient-to-r from-[#835D23] to-[#B58130] mb-16 rounded-none text-center">
                     <span className="text-lg text-white">Send Review</span>
                     <MdRocketLaunch size={26} color="white"/>
                  </button>
               </div>
            </form>
         </div>
      </div>
   )}
export default UserAddReviews;