import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import {  Pagination } from 'swiper/modules';

import category1 from '../../../assets/home/slide1.jpg';
import category2 from '../../../assets/home/slide2.jpg';
import category3 from '../../../assets/home/slide3.jpg';
import category4 from '../../../assets/home/slide4.jpg';
import category5 from '../../../assets/home/slide5.jpg';

const OrderOnline = () => {
   return (
      <>
         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="container mx-auto font-cinzel text-[32px] text-white "
         >
            <SwiperSlide>
               <img className='w-full  ' src={category1} alt="" />
               <h1 className='text-center -mt-10 '>Salads</h1>
            </SwiperSlide>
            <SwiperSlide>
               <img className='w-full  ' src={category2} alt="" />
               <h1 className='text-center -mt-10 '>pizzas</h1>
            </SwiperSlide>
            <SwiperSlide>
               <img className='w-full  ' src={category3} alt="" />
               <h1 className='text-center -mt-10 '>Soups</h1>
            </SwiperSlide>
            <SwiperSlide>
               <img className='w-full  ' src={category4} alt="" />
               <h1 className='text-center -mt-10 '>desserts</h1>
            </SwiperSlide>
            <SwiperSlide>
               <img className='w-full  ' src={category5} alt="" />
               <h1 className='text-center -mt-10 '>Salads</h1>
            </SwiperSlide>
         </Swiper>
      </>
   )
}
export default OrderOnline;