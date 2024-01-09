/* eslint-disable react/prop-types */

import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import MyButton from '../Shared/UtilitiesCompnents/MyButton';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useCartItems from '../../Hooks/useCartItems';
import axiosSecure from '../../API/axiosSecure';
const MenuItemCard = ({ item }) => {
   const { image, name, recipe, price,_id } = item || {};
   const { user } = useAuth()
   const navigate = useNavigate()
   const loc = useLocation()
const {refetch} = useCartItems()
   const handleAddToCartItem = async () => {
      if (user && user?.email) {
         const toastId = toast.loading('Adding to cart ...')
         // console.log(item, user?.email);
         const cartItem = {
            menuId: _id,
            email: user?.email,
            image,
            name,
            price,
         }
         // console.log(cartItem);
         try {
            const response = await axiosSecure.post('/add-cart-item', cartItem)
            console.log(response);
            if (response?.data?.acknowledged) {
               refetch()
               toast.success(`${name} is added to cart`, { id: toastId })

            }
               
         } catch (error) {
            toast.error(error.message,{id:toastId})
         }
      } else {
         Swal.fire({
            title: "You are not Logged in",
            text: "Please login to Add this item to cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log In"
         }).then((result) => {
            if (result.isConfirmed) {
               navigate('/login', { state: loc.pathname })
            }
         });
      }
   }
   return (
      <div className='col-span-1 bg-[#F3F3F3]'>
         <figure className='relative'>
            <img className='w-full h-[300px] object-cover' src={image} alt="" />
            <div className='font-medium text-white bg-black/80 backdrop-blur px-4 py-2 absolute top-5 right-5'>${price}</div>
         </figure>
         <div className='flex flex-col items-center px-5 justify-center text-center space-y-3 my-10'>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <p className='leading-[26px]'>{recipe}</p>

            <div className='' onClick={handleAddToCartItem}>
               <MyButton name={'Add to Cart'} className={'border-b-[#BB8506] rounded-md text-[#BB8506] hover:text-[#BB8506] hover:bg-black hover:border-transparent shadow-lg mt-5'} />
            </div>
         </div>
      </div>
   )
}
export default MenuItemCard;