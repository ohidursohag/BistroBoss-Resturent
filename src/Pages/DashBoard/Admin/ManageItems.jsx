import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Title from "../../../Components/Shared/UtilitiesCompnents/Title";
import { Helmet } from "react-helmet-async";
import useMenuItems from "../../../Hooks/useMenuItems";
import toast from "react-hot-toast";
import axiosSecure from "../../../API/axiosSecure";
import Swal from "sweetalert2";


const ManageItems = () => {
   const { menuItems, refetch } = useMenuItems()
   // console.log(menuItems);
   const handleDeleteMenuItem = (id) => {
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
               const result = await axiosSecure.delete(`/delete-menu-item/${id}`)
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
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Manage Items</title>
         </Helmet>
         <Title title="MANAGE ALL ITEMS" titleHeader="---Hurry Up!---" titleClassName={'!text-[36px] !py-3'} />

         <div className="w-[90%] mx-auto bg-white px-5 py-10">
            <div className="text-3xl font-bold font-cinzel flex justify-between">
               <h2 >Total Items: {50}</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto my-10 table-head-rounded">
               <table className="table  w-full  ">
                  {/* head */}
                  <thead className="bg-[#D1A054]   h-[72px]  text-white ">
                     <tr className=" py-10">
                        <th></th>
                        <th className="">ITEM IMAGE</th>
                        <th>ITEM NAME</th>
                        <th>PRICE</th>
                        <th>UPDATE</th>
                        <th>REMOVE</th>
                     </tr>
                  </thead>
                  <tbody className="text-[#737373]">

                     {
                        menuItems?.map((item, index) =>
                           <tr key={item._id}>
                              <td className="text-lg text-center text-black font-bold">{index + 1}</td>
                              <td>
                                 <div className=" w-14 h-14 shadow">
                                    <img className="h-full object-cover" src={item?.image} alt="" />
                                 </div>
                              </td>
                              <td>{item?.name}</td>
                              <td>${item?.price}</td>

                              <td>
                                 <Link to={`/admin/update-item/${item?._id}`} 
                                    className="btn btn-square  bg-[#D1A054]  hover:bg-[#D1A054]">
                                    <FaRegEdit size={24} color="white" />
                                 </Link>
                              </td>
                              <td>
                                 <button onClick={() => handleDeleteMenuItem(item?._id)}
                                    className="btn btn-square bg-[#B91C1C] w-[50px]  h-[50px] hover:bg-[#B91C1C]">
                                    <FaRegTrashAlt size={24} color="white" />
                                 </button>
                              </td>
                           </tr>)
                     }

                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}
export default ManageItems;