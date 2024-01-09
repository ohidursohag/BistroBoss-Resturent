import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FaCreditCard } from "react-icons/fa";
import './common.css'
import { useEffect, useState } from "react";
import useCartItems from "../../Hooks/useCartItems";
import { createPaymentIntent } from "../../API/payment";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const PaymentForm = () => {
   const { data: cartItems } = useCartItems()
   // console.log(cartItems);
   const totalPrice = cartItems?.reduce((sum, currentValue) => sum + currentValue?.price, 0)
   // console.log(totalPrice);
   const {user} = useAuth() 
   const stripe = useStripe();
   const elements = useElements();
   const [cardError, setCardError] = useState('');
   const [clientSecret, setClientSecret] = useState('');
   const [processing, setProcessing] = useState(false);


   useEffect(() => {
      createPaymentIntent({ price: totalPrice })
         .then(data => {
            console.log(data?.clientSecret);
            setClientSecret(data?.clientSecret);
         });
   }, [totalPrice])
   

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!stripe || !elements || !clientSecret) {
         return;
      }

      const card = elements.getElement(CardElement);
      // console.log(CardElement);
      // console.log(card);
      if (!card) {
         return
      }
      setProcessing(true)
      const toastId = toast.loading('Payment Processing ...')

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      })
      
      if (error) {
         console.log('Payment error', error)
         setProcessing(false)
         setCardError(error.message)
         toast.error(error.message, { id: toastId })
         return;
      } else {
         setCardError('')
         console.log('payment method', paymentMethod)
      }

      
      // ConFirm Payment 
      const { paymentIntent, error: confirmError } =
         await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
               card: card,
               billing_details: {
                  email: user?.email,
                  name: user?.displayName,
               },
            },
         })
      
      if (confirmError) {
         console.log(confirmError)
         setCardError(confirmError.message)
         setProcessing(false)
         toast.error(confirmError.message, { id: toastId })
      }
      console.log('payment intent', paymentIntent)
      if (paymentIntent?.status === 'succeeded') {
         toast.success('Payment Success', { id: toastId })
         setProcessing(false)
         
      }

   
   }
   return (
      <>
         {/* <form>
         <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
               <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
               <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="col-span-2 sm:col-span-1">
               <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
               <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="col-span-2 sm:col-span-1">
               <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
               <input type="text" name="cvv" id="cvv" placeholder="000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="col-span-2 sm:col-span-1">
               <label htmlFor="card-holder" className="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
               <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
         </div>
         <div className=" flex justify-center my-5">
            <button className="btn normal-case bg-gradient-to-r from-[#835D23] to-[#B58130] my-5 rounded-none w-[50%]  text-center ">
               <span className="text-xl font-bold font-cinzel mr-2 text-white">Pay</span>
               <FaCreditCard size={24} color="white" />
            </button>
         </div>
      </form> */}

         <div>
            <form onSubmit={handleSubmit}>
               <CardElement options={{
                  style: {
                     base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                           color: '#aab7c4',
                        },
                     },
                     invalid: {
                        color: '#9e2146',
                     },
                  },
               }} />

               <div className=" flex justify-center my-5">
                  <button
                     disabled={!stripe || !clientSecret||processing}
                     type="submit" className="btn normal-case bg-gradient-to-r from-[#835D23] to-[#B58130] my-5 rounded-none w-[50%]  text-center ">
                     <span className="text-xl font-bold font-cinzel mr-2 text-white">Pay</span>
                     <FaCreditCard size={24} color="white" />
                  </button>
               </div>
               <p className="text-red-500">{cardError}</p>
            </form>
         </div>
      </>
   )
}

export default PaymentForm;