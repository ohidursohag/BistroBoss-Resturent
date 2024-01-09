import { Helmet } from "react-helmet-async";
import OurLocation from "../../../Components/ContactUs/OurLocation";
import BookATable from "../../../Components/Shared/AdminAndDashBoard/BookATable";


const Reservation = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Reservation</title>
         </Helmet>
         <BookATable />
         <OurLocation />
      </div>
   )
}
export default Reservation;