/* eslint-disable react/prop-types */

import MenuItemCard from "../Cards/MenuItemCard";


const ItemsByCatgory = ({category}) => {
   return (
      <div>
         {
            category?.length
               ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
                  {
                     category?.map(item => <MenuItemCard key={item?._id} item={item} />)
                  }
               </div>
               : <div className="h-[500px] flex justify-center items-center text-center">
                  <div>
                     <p className="text-3xl font-bold">No Menu Item Available for this Category</p>
                     <p className="text-xl font-medium text-gray-400">Please try Another menu</p>
                  </div>
               </div>
         }
         
     </div>
   )}
export default ItemsByCatgory;