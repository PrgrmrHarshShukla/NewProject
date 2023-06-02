import { Link } from "react-router-dom"

import '@fortawesome/fontawesome-free/css/all.css';


function Header() {
   return (      
         <div className="flex flex-col justify-between items-center w-[20vw] min-h-screen fixed border-4 border-gray-300 rounded-tr-[60px]">

               <img src="src\assets\jantasuvidha-logo-removebg.png" className="w-[20vw] h-[18vh] min-w-[20vw] px-2" />  


               <ul className="flex flex-col justify-center items-start w-[20vw] h-[82vh] bg-gray-300 text-[3vh]">
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/">
                        <i className="fas fa-home hover:text-blue-500 mb-3"></i>
                        <p className="hover:text-blue-500">Dashboard</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/profile">
                        <i className="fas fa-user hover:text-blue-500 mb-3"></i>
                        <p className="hover:text-blue-500">My Profile</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/about">
                        <i className="fas fa-book hover:text-blue-500 mb-3"></i>
                        <p className="hover:text-blue-500">Widgets</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/services">
                        <i className="fas fa-briefcase hover:text-blue-500 mb-3"></i>
                        <p className="hover:text-blue-500">Services</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/registration">
                        <i className="fas fa-user-plus hover:text-blue-500 mb-3"></i>
                        <p className="hover:text-blue-500">Registration</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/contact">
                        <i className="fas fa-globe hover:text-blue-500 mb-3"></i>
                        <p className="hover:text-blue-500">Contact</p>
                     </Link>
                  </li>
                  
               </ul>

         </div>      
   )
}


export default Header