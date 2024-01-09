import Container from "../Shared/UtilitiesCompnents/Container";
import Title from "../Shared/UtilitiesCompnents/Title";
import { BsFillSendFill } from "react-icons/bs";

const ContactForm = () => {
   return (
      <Container className={'mb-[100px] '}>
         <Title titleHeader="---Send Us a Message---" title="CONTACT FORM" />

         <div className="bg-[#F3F3F3]">
            <form className="w-[90%] mx-auto pt-[100px] pb-16 space-y-5">
               <div className="flex  gap-10">
                  <div className='w-full'>
                     <label htmlFor="name" className="text-xl font-medium "> Name <sup className="text-xl leading-none text-red-500 ">*</sup></label>
                     <input type="text" name="name" required id="name" placeholder="Enter your name here" className=" h-14 w-full mt-2 mb-5 rounded-[8px]  bg-white px-4  outline-none" />
                  </div>
                  <div className='w-full'>
                     <label htmlFor="email" className="text-xl font-medium "> Email <sup className="text-xl leading-none text-red-500 ">*</sup></label>
                     <input type="email" name="email" required id="email" placeholder="Enter your name here" className=" h-14 w-full mt-2 mb-5 rounded-[8px]  bg-white px-4  outline-none" />
                  </div>
               </div>
               <div className='w-full'>
                  <label htmlFor="phone" className="text-xl font-medium "> Phone</label>
                  <input type="text" name="phone" required id="phone" placeholder="Your phone number" className=" h-14 w-full mt-2 mb-5 rounded-[8px]  bg-white px-4  outline-none" />
               </div>
               <div>
                  <label htmlFor="message" className="text-xl  font-medium ">Message</label>
                  <textarea name="message" id="message" placeholder="Your Message here" className="w-full mt-2 h-[300px] bg-white px-4  outline-none pt-3" ></textarea>
               </div>
               <div className="bg-white w-[250px] py-2 flex justify-between items-center">
                  <div className="flex items-center gap-5 ml-5">
                     <input type="checkbox" name="captcha" required id="captcha" className="    rounded-[8px]  bg-white px-4 text-left  outline-none" />
                     <label htmlFor="captcha">I am not a robot</label>
                  </div>
                  <img width={60} className="mr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png" alt="" />
               </div>
            </form>
            <div className=" flex justify-center ">
               <button className="btn normal-case bg-gradient-to-r from-[#835D23] to-[#B58130] mb-16 rounded-none text-center">
                  <span className="text-lg text-white">Send Message</span>
                  <BsFillSendFill size={30} color="white" />
               </button>              
            </div>
         </div>
      </Container>
   )
}
export default ContactForm;