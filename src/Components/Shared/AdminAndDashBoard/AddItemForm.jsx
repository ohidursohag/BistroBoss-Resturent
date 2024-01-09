import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa6';
import { uploadImage } from '../../../API/imageUpload';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { addNewMenuItem } from '../../../API/menuItems';


const AddItemForm = () => {

   // console.log(existingMenu);
   const { register, handleSubmit, formState: { errors } } = useForm()
   const onSubmit = async (data) => {
      // console.log(data);
      Swal.fire({
         title: "Are you sure?",
         text: "You want to Add this item",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Confirm"
      }).then(async (result) => {
         if (result.isConfirmed) { 
            const toastId = toast.loading('Item Adding ...');
            try {
               // image upload
               const imageUploadResponse = await uploadImage(data?.image[0])

               if (imageUploadResponse?.success) {
                  const newMenuItem = {
                     name: data?.name,
                     recipe: data?.recipe,
                     category: data?.category,
                     price: data?.price,
                     image: imageUploadResponse?.data?.url
                  }
                  const response = await addNewMenuItem(newMenuItem)
                  if (response.acknowledged) {
                     toast.success('Item Successfully Added', {id: toastId})
                  }
               }
            } catch (error) {
               toast.error(error.message, {id: toastId})
            }
         }
      })


   }
   return (
      <form onSubmit={handleSubmit(onSubmit)}
         className="w-[90%] mx-auto my-10">
         <div className='w-full mb-5'>
            <label className="text-xl font-medium "> Recipe name <span className="text-red-500">*</span></label>
            <input type="text" {...register("name", { required: true })}  placeholder="Enter recipe name" className=" h-[60px] w-full mt-3  rounded-[8px]  bg-white px-10  outline-none" />
            {errors.name && <span className='text-red-500'>This field is required</span>}
         </div>
         <div className="flex items-center gap-5 mb-5">
            <div className="w-full  ">
               <label
                  className="text-xl font-medium ">
                  Price <span className="text-red-500">*</span>
               </label>
               <input
                  type="number"
                  {...register("price", { required: true })}
                  step={0.01}
                  min={1}                 
                  placeholder="Enter Price"
                  className="h-[60px] w-full mt-3  rounded-[8px]  bg-white px-10  outline-none"
               />
               {errors.price && <span className='text-red-500'>This field is required</span>}
            </div>

            <div className="w-full ">
               <label className="text-xl font-medium ">
                  Catrgory <span className="text-red-500 ">*</span>
               </label>
               <select {...register("category", { required: true })}  className="h-[60px] w-full mt-3 rounded-[8px]  bg-white px-10  outline-none">
                  <option   >{'Choose a Category'} </option>
                  <option value={'salad'}>Salad</option>
                  <option value={"pizza"}>Pizza</option>
                  <option value={"soup"}>Soup</option>
                  <option value={"dessert"}>Dessert</option>
                  <option value={"drinks"}>Drinks</option>
               </select>
               {errors.category && <span className='text-red-500'>This field is required</span>}
            </div>
         </div>
         <div>
            <label className="text-xl  font-medium ">Recipe Details <span className="text-red-500">*</span></label>
            <textarea {...register("recipe", { required: true })} placeholder="Review in detail"  className="w-full mt-3 h-[200px] bg-white px-10  outline-none pt-5" ></textarea>
            {errors.recipe && <span className='text-red-500'>This field is required</span>}
         </div>
         <input type="file" {...register("image", { required: true })} className="mt-5 block   text-slate-500 file:mr-4 file:py-2 file:px-4  file:border-0 file:text-base file:font-semibold file:text-[#444444] file:bg-gray-300 file:rounded-none file:normal-case text-lg  file:btn " />
         {errors.image && <span className='text-red-500'>This field is required</span>}
         <div className="my-5">
            <button type="submit" className="btn normal-case bg-gradient-to-r from-[#835D23] to-[#B58130] mb-16 rounded-none text-center">
               <span className="text-lg text-white">Add Item</span>
               <FaUtensils size={26} color="white" />
            </button>
         </div>
      </form>
   )
}


export default AddItemForm;