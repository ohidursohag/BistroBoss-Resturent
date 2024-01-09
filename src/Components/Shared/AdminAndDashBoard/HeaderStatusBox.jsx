


// eslint-disable-next-line react/prop-types
const HeaderStatusBox = ({children,className,value,statusName}) => {
   return(
      <div >
         <div className={`text-white ${className} h-[150px] flex justify-center items-center gap-5 rounded-lg`}>
            <div>
               {children}
            </div>
            <div>
               <div className="text-[40px] font-extrabold">{value}</div>
               <div className="text-2xl ">{statusName}</div>
            </div>
         </div>
      </div>
   )}
export default HeaderStatusBox;