// import { useEffect } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import { getSingleMenuItem } from "../../../API/menuItems";
import { uploadImage } from "../../../API/imageUpload";
import useUpdateMenu from "../../../Hooks/useUpdateMenu";


// eslint-disable-next-line react/prop-types
const UpdateItemForm = ({ existingMenu, refetch, id }) => {
   const { category, image } = existingMenu || {};
const {updateMenu} =useUpdateMenu()
   const { register, handleSubmit } = useForm({
      defaultValues: async () => await getSingleMenuItem(id)
   })



   const onSubmit = async (data) => {
      // refetch()
      // console.log(data);
      let updatedImage = data?.image;
      if (image !== data?.image) {
         const uploadResponse = await uploadImage(data?.image[0])
         updatedImage = uploadResponse?.url;
         // console.log(updatedImage);
      }
      const updatedMenu = {
         name: data?.name,
         category: data?.category,
         price: data?.price,
         recipe: data?.recipe,
         image: updatedImage
      }
      // console.log(updatedMenu);
      updateMenu({ id, updatedMenu })
      refetch()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}
         className="w-[90%] mx-auto my-10">
         <div className='w-full'>
            <label className="text-xl font-medium"> Recipe name <span className="text-red-500">*</span></label>
            <input type="text"  {...register("name")} className=" h-[60px] w-full mt-3 mb-5 rounded-[8px]  bg-white px-10  outline-none" />

         </div>

         <div className="flex items-center gap-5 ">
            <div className="w-full  mb-5">
               <label
                  className="text-xl font-medium ">
                  Price <span className="text-red-500 ">*</span>
               </label>
               <input
                  type="number"
                  {...register("price")}
                  step={0.01}
                  min={1}
                  className="h-[60px] w-full mt-3 mb-5 rounded-[8px]  bg-white px-10  outline-none"
               />
            </div>

            <div className="w-full  mb-5">
               <label
                  className="text-xl font-medium "
               >
                  Catrgory <span className="text-red-500 ">*</span>
               </label>
               <select  {...register("category")} className="h-[60px] w-full mt-3 mb-5 rounded-[8px]  bg-white px-10  outline-none">
                  <option value={'salad'}>Salad</option>
                  <option value={"pizza"}>Pizza</option>
                  <option value={"soup"}>Soup</option>
                  <option value={"dessert"}>Dessert</option>
                  <option value={"drinks"}>Drinks</option>
               </select>
            </div>
         </div>
         <div>
            <label className="text-xl  font-medium ">Recipe Details <span className="text-red-500">*</span></label>
            <textarea {...register("recipe")} placeholder="Review in detail" className="w-full mt-3 h-[200px] bg-white px-10  outline-none pt-5" ></textarea>
         </div>
         <div className="flex items-center my-3 gap-10">
            <input type="file"  {...register("image")} className="mt-5 block   text-slate-500 file:mr-4 file:py-2 file:px-4  file:border-0 file:text-base file:font-semibold file:text-[#444444] file:bg-gray-300 file:rounded-none file:normal-case text-lg  file:btn " />
            <div className="flex items-center gap-5 ">
               <p className="mb-2 text-xl font-medium underline">image:</p>
               <figure className="shadow-md">
                  <img className="h-[100px] object-cover object-center" src={image} alt="" />
               </figure>
            </div>
         </div>

         <div className="my-5">
            <button type="submit" className="btn normal-case bg-gradient-to-r from-[#835D23] to-[#B58130] mb-16 rounded-none text-center">
               <span className="text-lg text-white">Update Item</span>
               <FaUtensils size={26} color="white" />
            </button>
         </div>
      </form>
   )
}
export default UpdateItemForm;