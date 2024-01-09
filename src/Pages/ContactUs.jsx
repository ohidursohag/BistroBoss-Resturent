import { Helmet } from "react-helmet-async";
import BannerContent from "../Components/Shared/UtilitiesCompnents/BannerContent";
import bannerBg from '../assets/contact/banner.jpg'

import OurLocation from "../Components/ContactUs/OurLocation";
import ContactForm from "../Components/ContactUs/ContactForm";
const ContactUs = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Contact Us</title>
         </Helmet>
         {/* Banner */}
         <BannerContent title={'CONTACT US'} image={bannerBg} description={'Would you like to try a dish?'} />
         {/* Our Location */}
         <OurLocation />
         {/* COntact Form */}
         <ContactForm/>
      </div>
   )
}
export default ContactUs;