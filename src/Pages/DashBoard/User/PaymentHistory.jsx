import { Helmet } from "react-helmet-async";
import Title from "../../../Components/Shared/UtilitiesCompnents/Title";


const PaymentHistory = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Payment History</title>
         </Helmet>
         <Title title="PAYMENT HISTORY" titleHeader="---At a Glance!---" titleClassName={'!text-[36px] !py-3'} />

         <div className="w-[90%] mx-auto bg-white px-5 py-10">
            <div className="text-3xl font-bold font-cinzel flex justify-between">
               <h2 >Total Payment: 52</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto my-10 table-head-rounded">
               <table className="table  w-full  ">
                  {/* head */}
                  <thead className="bg-[#D1A054] text-base  h-[72px]  text-white ">
                     <tr className=" py-10 uppercase ">
                        <th></th>
                        <th className="">Email</th>
                        <th>Category</th>
                        <th>Total PRICE</th>
                        <th>Payment Date</th>
                     </tr>
                  </thead>
                  <tbody className="text-[#737373] ">
                     <tr className="h-[60px]">
                        <td className="text-center">1</td>
                        <td>Sohag@gmail.com</td>
                        <td>Food Order</td>
                        <td>$71.5 </td>
                        <td>Monday, April 10, 2023</td>
                     </tr>
                     


                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}
export default PaymentHistory;