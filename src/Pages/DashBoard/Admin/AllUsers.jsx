import { Helmet } from "react-helmet-async";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import axiosSecure from "../../../API/axiosSecure";
import Title from "../../../Components/Shared/UtilitiesCompnents/Title";

const AllUsers = () => {
   const queryClient = useQueryClient()
   const { data: allUsers = [], refetch } = useQuery({
      queryKey: ['allUsers'],
      queryFn: async () => {
         const { data } = await axiosSecure.get('/all-users');
         return data
      }
   })
   // console.log(allUsers);
   const { mutate } = useMutation({
      mutationKey: ['allUsers'],
      mutationFn: async (id) => {
         const { data } = await axiosSecure.delete(`/delete-user/${id}`);
         return data;
      },
      onSuccess: () => {
         toast.success('Successfully deleted')
         queryClient.invalidateQueries({ queryKey: ['allUsers'] })
      },
      onError: () => {
         toast.error('Something went wronge');
      }
   })

   const handleDeleteUser = (id) => {
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
            mutate(id)
         }
      })

      // console.log(id);

   }
   const handleMakeAdmin = (user) => {
      Swal.fire({
         title: "Are you sure?",
         text: `You want to promote ${user?.name} as admin?`,
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Confirm"
      }).then(async (result) => {
         if (result.isConfirmed) {
            const toastId = toast.loading('processing .....')
            try {
               const { data } = await axiosSecure.patch(`/make-admin/${user?._id}`)
               console.log(data);
               if (data.modifiedCount) {
                  refetch()
                  toast.success(`${user?.name} is promoted to admin`, { id: toastId });
               } else {
                  toast.error(`${user?.name} is Alredy in Admin role`, { id: toastId });
               }
            } catch (error) {
               toast.error(error.message, { id: toastId })
            }
         }
      })
   }
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | All Users</title>
         </Helmet>
         <Title title="MANAGE ALL USERS" titleHeader="---How many??---" titleClassName={'!text-[36px] !py-3'} />

         <div className="w-[90%] mx-auto bg-white px-5 py-10">
            <div className="text-3xl font-bold font-cinzel flex justify-between">
               <h2 >Total User: 52</h2>
            </div>
            {/* Table */}
            <div className="overflow-x-auto my-10 table-head-rounded">
               <table className="table  w-full  ">
                  {/* head */}
                  <thead className="bg-[#D1A054] text-base  h-[72px]  text-white ">
                     <tr className=" py-10 uppercase ">
                        <th></th>
                        <th className="">Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody className="text-[#737373] ">
                     {
                        allUsers?.map((user, index) => <tr key={user?._id} className="h-[60px]">
                           <th className="text-center">{index + 1}</th>
                           <td>{user?.name}</td>
                           <td>{user?.email}</td>
                           <td>
                              {
                                 user?.role === 'admin'
                                    ? <div className="text-base font-bold text-green-500">Admin</div>
                                    : <button onClick={() => handleMakeAdmin(user)}
                                       className="btn btn-ghost bg-[#D1A054] w-[50px]  h-[50px] hover:bg-[#D1A054]">
                                       <FaUsers size={24} color="white" />
                                    </button>
                              }

                           </td>
                           <td>
                              <button onClick={() => handleDeleteUser(user?._id)}
                                 className="btn btn-ghost bg-[#B91C1C] w-[50px]  h-[50px] hover:bg-[#B91C1C]">
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
export default AllUsers;