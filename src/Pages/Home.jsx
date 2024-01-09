import CallUs from "../Components/Home/CallUs/CallUs";
import FeaturedMenu from "../Components/Home/FeaturedMenu/FeaturedMenu";
import ChefRecomanded from "../Components/Home/ChefRecomanded/ChefRecomanded";
import ChefService from "../Components/Home/ChefService/ChefService";
import MyBanner from "../Components/Home/MyBanner/MyBanner";
import OrderOnline from "../Components/Home/OrderOnline/OrderOnline";
import OurMenu from "../Components/Home/OurMenu/OurMenu";
import Title from "../Components/Shared/UtilitiesCompnents/Title";
import Testimonial from "../Components/Home/Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";


const Home = () => {

   return (
      <div className="">
         <Helmet>
            <title>Bistro Boss | Home</title>           
         </Helmet>
         <div className="!h-[400px] sm:!h-[500px] lg:!h-[calc(100vh-100px)] ">
            <MyBanner />
         </div>
         <div className="my-[100px]" >
            <Title titleHeader="--- From 11:00am to 10:00pm ---" title="ORDER ONLINE"></Title>
            <div className="  mt-10 mb-20" >
               <OrderOnline />
            </div>
         </div>
         <div className="my-[100px]">
            <ChefService />
         </div>

         <div className="my-[100px]" >
            <Title titleHeader="---Check it out---" title="FROM OUR MENU"></Title>
            <div className="  mt-10 mb-20" >
               <OurMenu />
            </div>
         </div>
         <CallUs />
         <div>
            <Title titleHeader="---Should Try---" title="CHEF RECOMMENDS"></Title>
            <ChefRecomanded />
         </div>
         <div>
            <FeaturedMenu />
         </div>
         <Testimonial/>
      </div>
   )
}
export default Home;