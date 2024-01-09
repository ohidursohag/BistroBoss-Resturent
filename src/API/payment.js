import axiosSecure from "./axiosSecure"

// create payment intent
export const createPaymentIntent = async (price) => {
   const { data } = await axiosSecure.post('/create-payment-intent', price)
   return data
}