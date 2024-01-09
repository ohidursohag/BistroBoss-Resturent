import Container from "./Container";



// eslint-disable-next-line react/prop-types
const BannerContent = ({ title, description, image }) => {
   return(
      <div style={{ backgroundImage: `url(${image})` }} className={`!h-[400px] sm:!h-[500px] lg:!h-screen bg-cover bg-center  text-white font-cinzel flex justify-center items-center`}>
         <Container className={` text-center  `}>
            <div className="py-[130px] backdrop-blur-sm bg-[rgba(21,21,21,0.6)] w-[90%] mx-auto">
               <h1 className={`text-[88px] font-bold`}>{title}</h1>
               <p className="text-xl font-medium mx-auto">{description}</p>
            </div>
         </Container>
      </div>
   )}
export default BannerContent;