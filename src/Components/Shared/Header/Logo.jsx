/* eslint-disable react/prop-types */


const Logo = ({logoClass}) => {
   return(
      <div className={`font-cinzel ${logoClass} flex flex-col items-center justify-center`}>
         <h1 className="text-2xl lg:text-[32px] font-black  leading-none">BISTRO BOSS</h1>
         <h4 className="leading-none text-xl ml-1 lg:ml-0  lg:text-2xl font-bold tracking-[6px] lg:tracking-[9px]">Restaurant</h4>
      </div>
   )}
export default Logo;