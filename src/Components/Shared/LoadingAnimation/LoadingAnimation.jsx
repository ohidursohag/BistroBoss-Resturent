
import cupcake from '../../../assets/loader3.gif'
const LoadingAnimation = () => {
   return (
      <div>
         <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
            <img src={cupcake} alt="" />
            <h1 className='font-cinzel text-[48px] font-bold text-center'>Welcome to Bistro Boss <br /> Restaurant</h1>
         </div>
      </div>
   );
};

export default LoadingAnimation;