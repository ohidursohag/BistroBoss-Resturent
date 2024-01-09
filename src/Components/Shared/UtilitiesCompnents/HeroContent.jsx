import Container from "./Container";


// eslint-disable-next-line react/prop-types
const HeroContent = ({title,description,className,bgImage}) => {
   return(              
      <div style={{ backgroundImage: `url(${bgImage})` }} className=" xl:h-[650px] bg-fixed flex items-center justify-center mb-16 bg-cover bg-center bg-no-repeat">
         <Container className={` text-center ${className} xl:py-[130px] backdrop-blur-sm py-16`}>
            <h1 className="font-cinzel text-[45px] font-medium">{title}</h1>
            <p className=" max-w-[750px] mx-auto">{description}</p>
         </Container>         
         </div>
   )}
export default HeroContent;