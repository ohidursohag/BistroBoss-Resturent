

// eslint-disable-next-line react/prop-types
const MenuCard = ({item}) => {
   const { image, name, recipe, price } =item || {};
   return(
         <div className='flex gap-3 justify-between '>
            <figure className='  w-[100px] h-[100px] border-2 rounded-r-full rounded-b-full overflow-hidden shadow-md'>
               <img className='w-[100px] object-cover h-[100px]' src={image} alt="" />
            </figure>
            <div className='w-[70%]'>
               <h3 className="font-cinzel text-xl font-medium">{name} --------------</h3>
               <p className="text-[#737373]">{recipe}
               </p>
            </div>
            <div>
               <p className="text-xl text-[#BB8506] font-medium">${price}</p>
            </div>
         </div>     
   )}
export default MenuCard;