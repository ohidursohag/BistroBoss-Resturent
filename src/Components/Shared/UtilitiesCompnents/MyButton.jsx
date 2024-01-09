

// eslint-disable-next-line react/prop-types
const MyButton = ({name,className}) => {
   return(
      <div className='w-full flex '>
         <button className={`btn btn-outline border-0 border-b-[3px]    ${className}`}>
            {name}
         </button>
      </div>
   )}
export default MyButton;