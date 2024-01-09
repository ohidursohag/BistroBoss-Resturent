import { Helmet } from "react-helmet-async";
import BannerContent from "../Components/Shared/UtilitiesCompnents/BannerContent";
import bannerBg from '../assets/shop/banner2.jpg'
import MyTabs from "../Components/OurShop/MyTabs";


const OurShopPage = () => {

   
   return(
      <div>
         <Helmet>
            <title>Bistro Boss | Our Shop</title>
         </Helmet>
         {/* Banner */}
         <div>
            <BannerContent title={'OUR SHOP'} description={'Would you like to try a dish?'} image={bannerBg} />
         </div>
         <div className="my-10">
            <MyTabs/>
         </div>
      </div>
   )}
export default OurShopPage;