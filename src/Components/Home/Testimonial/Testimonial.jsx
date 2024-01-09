import { useEffect, useState } from "react";
import Container from "../../Shared/UtilitiesCompnents/Container";
import Title from "../../Shared/UtilitiesCompnents/Title";
import ReviewCard from "./ReviewCard";

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Testimonial = () => {
   const [reviews, setReviews] = useState([])
   useEffect(() => {
      fetch('http://localhost:5001/bistro-boss/api/v1/reviews')
         .then(response => response.json())
         .then(data => setReviews(data))

   }, [])


   return (
      <Container className='mb-[100px]'>
         <Title titleHeader="---What Our Clients Say---" title="TESTIMONIALS"></Title>
         <div className="my-5">

            <div>
               <Swiper
                  navigation={true}
                  modules={[Navigation]} className="mySwiper">
                  {
                     reviews.map((review) =>
                        <SwiperSlide key={review?._id} >
                           <ReviewCard review={review} />
                        </SwiperSlide>)
                  }
               </Swiper>
            </div>
            {/* <ReviewCard /> */}
         </div>
      </Container>
   )
}
export default Testimonial;