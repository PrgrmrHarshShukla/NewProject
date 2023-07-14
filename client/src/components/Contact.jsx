import '@fortawesome/fontawesome-free/css/all.css';


// import { UidContext } from './UidContext';
// import { useContext } from 'react';
import homeBottom from "./homeBottom.png"


function Contact() {

   // const { images } = useContext(UidContext)

   return (
      <div  className="w-[70vw] overflow-x-hidden sm:w-[20vw]">
         <ul className="flex flex-col gap-2 justify-center mt-4 -ml-[8vw] sm:ml-0">
            <li className="flex flex-row items-center  gap-2">
               <i className="fas fa-phone"></i>
               <div>Info - +91 7722005539, +91 7722005540</div>
            </li>
            <li className="flex flex-row items-center gap-2">
               <i className="fas fa-mobile-alt "></i>
               <div>Support - +91 7722005540</div>
            </li>
            <li className="flex flex-row items-center gap-2 ">
               <i className="fas fa-envelope "></i>
               <div className="text-[15px]"> support@jantasuvidha.com</div>
            </li>
         </ul>
         <div className="border-2 rounded-[10px] flex flex-row justify-center mb-2  w-[70vw] sm:w-[20vw]">
            <img className="border-b-2 mb-4 " src={homeBottom} alt="" />
         </div>
      </div>
   )
}

export default Contact