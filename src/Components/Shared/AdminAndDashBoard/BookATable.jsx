
import Title from "../UtilitiesCompnents/Title";


const BookATable = () => {
   return (
      <div>
         <Title title="BOOK A TABLE" titleHeader="---Reservation---" titleClassName={'!text-[36px] !py-3'} />
         {/* Booking Form */}
         <div>
            <div className="flex items-center ">
               <div className="w-full px-3  mb-5">
                  <label
                     htmlFor="date"
                     className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                     Date <sup className="text-red-500 text-lg">*</sup>
                  </label>
                  <input
                     type="date"
                     name="date"
                     id="date"
                     className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
               </div>

               <div className="w-full px-3 mb-5">
                  <label
                     htmlFor="time"
                     className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                     Time <sup className="text-red-500 text-lg">*</sup>
                  </label>
                  <input
                     type="time"
                     name="time"
                     id="time"
                     className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
               </div>

               <div className="w-full px-3 mb-5">
                  <label
                     htmlFor="guest"
                     className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                     Guest <sup className="text-red-500 text-lg">*</sup>
                  </label>
                  <select name="guest" id="guest" className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                     <option selected>Number Of guest</option>
                     <option value={1}>1 Person</option>
                     <option value={2}>2 Person</option>
                     <option value={3}>3 Person</option>
                     <option value={4}>4 Person</option>
                  </select>
               </div>             
            </div>
            <div className="flex items-center ">
               <div className="w-full px-3  mb-5">
                  <label
                     htmlFor="name"
                     className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                     Name <sup className="text-red-500 text-lg">*</sup>
                  </label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     placeholder="Your name"
                     className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
               </div>

               <div className="w-full px-3 mb-5">
                  <label
                     htmlFor="phone"
                     className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                     Phone <sup className="text-red-500 text-lg">*</sup>
                  </label>
                  <input
                     type="phone"
                     name="phone"
                     id="phone"
                     placeholder="Your Phone Number"
                     className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
               </div>
               <div className="w-full px-3 mb-5">
                  <label
                     htmlFor="email"
                     className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                     Email <sup className="text-red-500 text-lg">*</sup>
                  </label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Your email address"
                     className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
               </div>             
            </div>
            <div className=" flex justify-center my-5">
               <button className="btn normal-case bg-gradient-to-r from-[#835D23] to-[#B58130] mb-16 rounded-none text-center">
                  <span className="text-lg text-white">Book A Table</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <g clipPath="url(#clip0_12_554)">
                        <path d="M15.25 6H8.75C7.785 6 7 5.215 7 4.25V2.75C7 2.336 7.336 2 7.75 2H9.354C9.682 0.847 10.743 0 12 0C13.257 0 14.318 0.847 14.646 2H16.25C16.664 2 17 2.336 17 2.75V4.25C17 5.215 16.215 6 15.25 6Z" fill="white" />
                        <path d="M18.25 3H18V4.25C18 5.767 16.767 7 15.25 7H8.75C7.233 7 6 5.767 6 4.25V3H5.75C4.233 3 3 4.233 3 5.75V21.25C3 22.767 4.233 24 5.75 24H18.25C19.767 24 21 22.767 21 21.25V5.75C21 4.233 19.767 3 18.25 3ZM9.5 21.5H6.75C6.336 21.5 6 21.164 6 20.75V18H9.5V21.5ZM9.5 16.5H6V13.5H9.5V16.5ZM9.5 12H6V9.25C6 8.836 6.336 8.5 6.75 8.5H9.5V12ZM18 20.75C18 21.164 17.664 21.5 17.25 21.5H11V18H18V20.75ZM18 16.5H11V13.5H18V16.5ZM18 12H11V8.5H17.25C17.664 8.5 18 8.836 18 9.25V12Z" fill="white" />
                     </g>
                     <defs>
                        <clipPath id="clip0_12_554">
                           <rect width="24" height="24" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
               </button>
            </div>
         </div>
      </div>
   )
}
export default BookATable;