import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
// import { FaCreditCard } from "react-icons/fa6";
import PaymentForm from "../../../Components/Payment/PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_gatway_PK)
const MakePayment = () => {

 

   return(
      <>
         <Helmet>
            <title>Bistro Boss | Payment</title>
         </Helmet>
         <div className="w-full h-full flex flex-col  justify-center mx-auto p-8">
            <h2 className="text-3xl font-bold font-cinzel text-center mb-6 uppercase">Payment</h2>
            <div className="rounded-lg  p-6">

               <Elements stripe={stripePromise}>
                  <PaymentForm />
               </Elements>
            </div>
         </div>
      </>
   )}
export default MakePayment;