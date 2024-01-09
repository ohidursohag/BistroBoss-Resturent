import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Title from "../../../Components/Shared/UtilitiesCompnents/Title";
import useCartItems from "../../../Hooks/useCartItems";
import axiosSecure from "../../../API/axiosSecure";
import { Helmet } from "react-helmet-async";


const MyBookings = () => {
   const { data: cartItems, refetch } = useCartItems()
   console.log(cartItems);
   const totalPrice = cartItems?.reduce((sum, currentValue) => sum + currentValue?.price, 0)
   // console.log(totalPrice);

   const handleDeleteBookingItem = async (id) => {
      // console.log(id);
      Swal.fire({
         title: "Are you sure?",
         text: "You want to delete this item",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Confirm"
      }).then(async (result) => {
         if (result.isConfirmed) {
            const toastId = toast.loading('deleting...');
            try {
               const result = await axiosSecure.delete(`/delete-cart-item/${id}`)
               if (result.data.deletedCount > 0) {
                  toast.success('successfully deleted', { id: toastId });
                  refetch()
               }
            } catch (error) {
               toast.error(error.message, { id: toastId })
            }
         }
      });

   }
   return(
      <div>
         <Helmet>
            <title>Bistro Boss | My Bookings</title>
         </Helmet>
         <Title title="MY BOOKINGS" titleHeader="---Excellent Ambience---" titleClassName={'!text-[36px] !py-3'} />

         <div className="w-[90%] mx-auto bg-white px-5 py-10">
            <div className="text-3xl font-bold font-cinzel flex justify-between">
               <h2 >Total orders: {cartItems?.length}</h2>
               <h2 >total price: ${totalPrice}</h2>
               <Link to='/dashboard/user/make-payment' className="btn bg-[#D1A054] hover:bg-[#D1A054] text-white">Pay</Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto my-10 table-head-rounded">
               <table className="table  w-full  ">
                  {/* head */}
                  <thead className="bg-[#D1A054]   h-[72px]  text-white ">
                     <tr className=" py-10">
                        <th>
                        </th>
                        <th className="">ITEM IMAGE</th>
                        <th>GUEST NUMBER</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>ACTION</th>
                     </tr>
                  </thead>
                  <tbody className="text-[#737373]">

                     {
                        cartItems?.map((item, index) => <tr key={item._id}>
                           <td className="text-lg text-center text-black font-bold">{index + 1}</td>
                           <td>
                              <div className=" w-14 h-14 shadow">
                                 <img className="h-full object-cover" src={item?.image} alt="" />
                              </div>
                           </td>
                           <td>{2}</td>
                           <td>{item?.name}</td>
                           <td>${item?.price}</td>
                           <th>
                              <button onClick={() => handleDeleteBookingItem(item?._id)}
                                 className="btn btn-ghost bg-[#B91C1C] w-[50px]  h-[50px] hover:bg-[#B91C1C]">
                                 <FaRegTrashAlt size={24} color="white" />
                              </button>
                           </th>
                        </tr>)
                     }

                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )}
export default MyBookings;