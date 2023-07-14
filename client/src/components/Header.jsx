import { Link } from "react-router-dom"
import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { UidContext } from "./UidContext";

import '@fortawesome/fontawesome-free/css/all.css';
import logo from "./logo.png"


function Header() {
   const { uid, setUid } = useContext(UidContext)
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
         <div className="flex flex-col justify-between items-center w-[20vw] fixed rounded-tr-[60px] overflow-y-hidden mb-0 h-[100vh]">

               <img src={logo} className="z-20 w-[20vw] min-h-[18vh] min-w-[20vw] px-2" />  


               <ul className="z-0 flex flex-col justify-center items-start w-[20vw] h-[82vh] min-h-[82vh] bg-green-300 text-[1.3rem] overflow-x-hidden border rounded-[10px]">

                  <li title="Home" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/">
                        <i className="fas fa-home hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">Home</p>
                     </Link>
                  </li>
                  <li title="Profile" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/profile">
                        <i className="fas fa-user hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">My Profile</p>
                     </Link>
                  </li>
                  <li title="Widgets" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/formIntro">
                        <i className="fas fa-file-alt hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">Widgets</p>
                     </Link>
                  </li>
                  <li title="Services" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/services">
                        <i className="fas fa-briefcase hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">Services</p>
                     </Link>
                  </li>
                  <li title="Registration" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/registration">
                        <i className="fas fa-user-plus hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">Registration</p>
                     </Link>
                  </li>
                  <li title="Contact" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                     <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/contact">
                        <i className="fas fa-globe hover:text-orange-500 mb-3"></i>
                        <p className="hover:text-orange-500">Contact</p>
                     </Link>
                  </li>
                  <li title="Logout" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                        <button 
                        onClick={handleClick}
                           className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12 hover:cursor-pointer"
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