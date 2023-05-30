import { Link } from "react-router-dom"

import '@fortawesome/fontawesome-free/css/all.css';


function Header() {
   return (      
         <div className="flex flex-col justify-center items-center w-screen">

            <div className="z-20 flex flex-row justify-between items-center w-[100vw] max-h-[20vh]">
               <img src="src\assets\jantasuvidha-logo-removebg.png" className="w-[15vw] h-[18vh] min-w-[20vw] pl-8" />
               
               <img src="src\assets\topRightIcon.png" className="w-[20vw] h-[16vh] min-w-[20vw]" />
            </div>

               <ul className="flex flex-row justify-evenly items-center  w-[99vw] h-[8vh] border-2 border-green-700 bg-green-700 rounded-[10px] text-[2vh]">
                  <li className="flex flex-row gap-1 items-center hover:bg-white h-[100%] px-4 rounded-[10px]  text-black">
                     <Link className="text-black no-underline" to="/">
                        <i className="fas fa-home"></i>
                        {" "}Main Page
                     </Link>
                  </li>
                  <li className="flex flex-row gap-1 items-center hover:bg-white h-[100%] px-4 rounded-[10px]  text-black">
                     <Link className="text-black no-underline" to="/services">
                        <i className="fas fa-briefcase"></i>
                        {" "}Services
                     </Link>
                  </li>
                  <li className="flex flex-row gap-1 items-center hover:bg-white h-[100%] px-4 rounded-[10px]  text-black">
                     <Link className="text-black no-underline" to="/registration">
                        <i className="fas fa-user-plus"></i>
                        {" "}Registration
                     </Link>
                  </li>
                  <li className="flex flex-row gap-1 items-center hover:bg-white h-[100%] px-4 rounded-[10px]  text-black">
                     <Link className="text-black no-underline" to="/about">
                        <i className="fas fa-book"></i>
                        {" "}About Us
                     </Link>
                  </li>
                  <li className="flex flex-row gap-1 items-center hover:bg-white h-[100%] px-4 rounded-[10px]  text-black">
                     <Link className="text-black no-underline" to="/contact">
                        <i className="fas fa-globe"></i>
                        {" "}Contact
                     </Link>
                  </li>
                  
               </ul>

         </div>      
   )
}


export default Header