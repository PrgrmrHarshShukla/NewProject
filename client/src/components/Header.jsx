import { Link } from "react-router-dom"

import '@fortawesome/fontawesome-free/css/all.css';

import { UidContext } from "./UidContext";
import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";

function Header() {

   const { uid, setUid, images } = useContext(UidContext)
   const auth = getAuth()

   const handleClick = async (e) => {
      e.preventDefault()
      if(uid) {
         try {
            await signOut(auth)
            alert("You have successfully logged out of Janta Suvidha.\nThank You.")
            setUid("")
         }
         catch(err) {
            console.error(err, " in logging out");
            alert(err, " in logging out");
         }
      }
      else {
         alert("You are already logged out!")
      }
   }



   return (      
         <div className="flex flex-col justify-between items-center w-[20vw] min-h-screen fixed border-4 border-gray-300 rounded-tr-[60px]">

               <img src={images[1]} className="w-[20vw] h-[18vh] min-w-[20vw] px-2" />  


               <ul className="flex flex-col justify-center items-start w-[20vw] h-[82vh] bg-gray-300 text-[1.3rem] overflow-x-hidden">
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/">
                        <i className="fas fa-home hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">Home</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/profile">
                        <i className="fas fa-user hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">My Profile</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-4 sm:gap-3" to="/form">
                        <i className="fas fa-file-alt hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">Form</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/services">
                        <i className="fas fa-briefcase hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">Services</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/registration">
                        <i className="fas fa-user-plus hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">Registration</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-3" to="/contact">
                        <i className="fas fa-globe hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">Contact</p>
                     </Link>
                  </li>
                  <li className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                        <button 
                        onClick={handleClick}
                           className="text-black no-underline flex flex-row justify-start items-center gap-3 hover:cursor-pointer"
                        >
                           <i className="fas fa-sign-out-alt hover:text-orange-500 mb-3"></i>
                           <p className="hover:text-orange-500">Logout</p>
                        </button>
                  </li>
                  
               </ul>

         </div>      
   )
}


export default Header