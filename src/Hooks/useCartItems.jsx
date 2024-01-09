import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosSecure from "../API/axiosSecure";


const useCartItems = () => { 
   const { user } = useAuth();
   const email = user?.email
   // console.log(email);
   const { data, isLoading, isError, refetch } = useQuery({
      queryKey: ['cartItems', email],
      queryFn: async () => {
         const cartItemsData = await axiosSecure.get(`/user/cart-Items?email=${email}`);
         return cartItemsData?.data;
      },
   });
   return { data, isLoading, isError, refetch }
}
  
export default useCartItems;