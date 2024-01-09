import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'

const Banner = () => {
   return (
      <div className="!h-[400px] sm:!h-[500px] lg:!h-[calc(100vh-100px)]">
         <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={2000} dynamicHeight={false} showThumbs={true} swipeable={true} transitionTime={500} stopOnHover={false} animationHandler="fade" >



            <div className=" !h-[400px] md:!h-[500px] lg:!h-[600px] xl:!h-[calc(100vh-100px)]">
               <img  src={img1} />
            </div>
            <div className="!h-[400px] sm:!h-[500px] lg:!h-[calc(100vh-100px)]">
               <img src={img2} />
            </div >
            <div className="!h-[400px] sm:!h-[500px] lg:!h-[calc(100vh-100px)]">
               <img  src={img3} />
            </div>
            <div className="!h-[400px] sm:!h-[500px] lg:!h-[calc(100vh-100px)]">
               <img  src={img4} />
            </div>
            <div className="!h-[400px] sm:!h-[500px] lg:!h-[calc(100vh-100px)]">
               <img  src={img5} />
            </div >
            <div className="!h-[400px] sm:!h-[500px] lg:!h-[calc(100vh-100px)]">
               <img  src={img6} />
            </div>

         </Carousel>

      </div>
   );
};

export default Banner;