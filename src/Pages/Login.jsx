
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginBg from '../assets/Login_Register/bg.png'
import loginImg from '../assets/Login_Register/Image_login.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { accessToken, saveUserData } from '../API/Auth';

const Login = () => {
   const { loginWithEmailPass, googleLogin, logOut } = useAuth()
   const loc = useLocation();
   const navigate = useNavigate()
   useEffect(() => {      
         loadCaptchaEnginge(6);    
   },[])

   const handleLogin = async (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const user_captcha_input = form.captchaInput.value;

      const toastId = toast.loading('Registering ...')
      if (!validateCaptcha(user_captcha_input)) {
         toast.error('Invalid Captcha,Please try again', { id: toastId });
         form.captchaInput.value = '';
         return;
      }
      try {
         const { user } = await loginWithEmailPass(email, password)          
         const getAccessToken = await accessToken(user?.email);
         // console.log(getAccessToken);
         if (getAccessToken.success) {
            const data = await saveUserData(user)
            console.log(data);
            toast.success('Successfuly  Logged In', { id: toastId })
            navigate(loc?.state ? loc.state : '/', { replace: true })
         } else {
            logOut()
         }         
      }
      catch (error) {
         toast.error(error.message, { id: toastId });
         navigate('/login')
      }
   }

   const handleLoginWithGoogle = async () => {
      const toastId = toast.loading('Registering ...')
      try {
         const {user} = await googleLogin()
         const getAccessToken = await accessToken( user?.email );
         if (getAccessToken.success) {
            const data = await saveUserData(user);
            console.log(data);
            toast.success('Registration Successfull and Logged In', { id: toastId })
            navigate(loc?.state ? loc.state : '/', { replace: true })
         } else {
            logOut()
         }
      } catch (error) {
         console.error(error.message);
         toast.error(error.message, { id: toastId });
      }

   }
   return (
      <div style={{ backgroundImage: `url(${loginBg})` }} className="min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
         <div className='w-[80%] mx-auto min-h-[600px] shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)]'>
            <div className={'flex w-[90%] mx-auto gap-5 justify-between items-center'}>
               <div className=''>
                  <img src={loginImg} alt="" />
               </div>
               <div className='w-2/5 my-10'>
                  <h2 className='text-2xl font-bold text-center mb-5'>Login</h2>
                  <form onSubmit={handleLogin}>
                     <div className='w-full'>
                        <label htmlFor="email" className="text-xl font-medium "> Email</label>
                        <input type="email" name="email" required id="email" placeholder="Email" className=" h-14 w-full mt-2 mb-5 rounded-[8px]  bg-white px-4  outline-none" />
                     </div>
                     <div className='w-full'>
                        <label htmlFor="password" className="text-xl  font-medium "> Password</label>
                        <input type="password" name="password" required id="password" placeholder="Enter your password" className=" h-14 w-full mt-2 mb-5 rounded-[8px]  bg-white px-4 outline-none" />
                     </div>
                     <div className='w-full'>
                        <LoadCanvasTemplate />
                     </div>
                     <div className='w-full'>
                        <input type="text"  name="captchaInput" required id="captchaInput" placeholder='Type the Captcha above' className=" h-14  w-full mt-1 rounded-[8px] bg-white px-4 outline-none" />
                     </div>
                     <button type='submit' className='btn w-full btn-ghost normal-case bg-[rgba(209,160,84,0.5)] mt-5 text-white hover:bg-[rgba(209,160,84,0.7)]'>
                        Sign In
                     </button>
                 </form>

                  <div className='text-center'>
                     <p className='text-[#D1A054] my-5'>New here? <Link to='/register' className='font-bold hover:text-[#ffa620]'>Create a New Account</Link></p>
                     <p className='font-medium mb-5'>Or Sign in With</p>
                  </div>

                  <div className='flex items-center justify-center gap-5'>
                     <div>
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="26" cy="26" r="25" fill="#F1F2F4" stroke="#444444" strokeWidth="2" />
                           <path d="M23.6964 27.248C23.6244 27.248 22.0404 27.248 21.3204 27.248C20.9364 27.248 20.8164 27.104 20.8164 26.744C20.8164 25.784 20.8164 24.8 20.8164 23.84C20.8164 23.456 20.9604 23.336 21.3204 23.336H23.6964C23.6964 23.264 23.6964 21.872 23.6964 21.224C23.6964 20.264 23.8644 19.352 24.3444 18.512C24.8484 17.648 25.5684 17.072 26.4804 16.736C27.0804 16.52 27.6804 16.424 28.3284 16.424H30.6804C31.0164 16.424 31.1604 16.568 31.1604 16.904V19.64C31.1604 19.976 31.0164 20.12 30.6804 20.12C30.0324 20.12 29.3844 20.12 28.7364 20.144C28.0884 20.144 27.7524 20.456 27.7524 21.128C27.7284 21.848 27.7524 22.544 27.7524 23.288H30.5364C30.9204 23.288 31.0644 23.432 31.0644 23.816V26.72C31.0644 27.104 30.9444 27.224 30.5364 27.224C29.6724 27.224 27.8244 27.224 27.7524 27.224V35.048C27.7524 35.456 27.6324 35.6 27.2004 35.6C26.1924 35.6 25.2084 35.6 24.2004 35.6C23.8404 35.6 23.6964 35.456 23.6964 35.096C23.6964 32.576 23.6964 27.32 23.6964 27.248Z" fill="#444444" />
                        </svg>
                     </div>
                     <div onClick={handleLoginWithGoogle} className='cursor-pointer'>
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="26" cy="26" r="25" fill="#F1F2F4" stroke="#444444" strokeWidth="2" />
                           <g clipPath="url(#clip0_3_100)">
                              <path d="M14 26C14 19.3832 19.3832 14 26 14C28.6723 14 31.2017 14.8598 33.3147 16.4864L30.5262 20.1088C29.2197 19.1031 27.6545 18.5714 26 18.5714C21.9039 18.5714 18.5714 21.9039 18.5714 26C18.5714 30.0961 21.9039 33.4286 26 33.4286C29.2991 33.4286 32.1026 31.2671 33.0688 28.2857H26V23.7143H38V26C38 32.6168 32.6168 38 26 38C19.3832 38 14 32.6168 14 26Z" fill="#444444" />
                           </g>
                           <defs>
                              <clipPath id="clip0_3_100">
                                 <rect width="24" height="24" fill="white" transform="translate(14 14)" />
                              </clipPath>
                           </defs>
                        </svg>

                     </div>
                     <div>
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="26" cy="26" r="25" fill="#F1F2F4" stroke="#444444" strokeWidth="2" />
                           <g clipPath="url(#clip0_3_105)">
                              <path d="M28 14.5C21.37 14.5 16 19.78 16 26.292C16 31.503 19.438 35.922 24.205 37.48C24.805 37.591 25.025 37.226 25.025 36.913C25.025 36.633 25.015 35.891 25.01 34.908C21.672 35.619 20.968 33.326 20.968 33.326C20.422 31.965 19.633 31.601 19.633 31.601C18.546 30.87 19.717 30.885 19.717 30.885C20.922 30.967 21.555 32.1 21.555 32.1C22.625 33.903 24.364 33.382 25.05 33.081C25.158 32.318 25.467 31.799 25.81 31.504C23.145 31.209 20.344 30.195 20.344 25.677C20.344 24.39 20.809 23.338 21.579 22.513C21.444 22.215 21.039 21.016 21.684 19.392C21.684 19.392 22.689 19.076 24.984 20.601C25.944 20.339 26.964 20.209 27.984 20.203C29.004 20.209 30.024 20.339 30.984 20.601C33.264 19.076 34.269 19.392 34.269 19.392C34.914 21.016 34.509 22.215 34.389 22.513C35.154 23.338 35.619 24.39 35.619 25.677C35.619 30.207 32.814 31.204 30.144 31.494C30.564 31.848 30.954 32.571 30.954 33.676C30.954 35.254 30.939 36.522 30.939 36.905C30.939 37.214 31.149 37.583 31.764 37.465C36.565 35.917 40 31.495 40 26.292C40 19.78 34.627 14.5 28 14.5Z" fill="#444444" />
                           </g>
                           <defs>
                              <clipPath id="clip0_3_105">
                                 <rect width="24" height="24" fill="white" transform="translate(16 14)" />
                              </clipPath>
                           </defs>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Login;