import '@fortawesome/fontawesome-free/css/all.css';


import { UidContext } from './UidContext';
import { useContext } from 'react';


function Contact() {

   const { images } = useContext(UidContext)

   return (
      <div className="w-[70vw] sm:w-[85%]">
         <ul className="flex flex-col gap-2 justify-center mt-4">
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
               <div> devnathdhembre@gmail.com</div>
            </li>
         </ul>
         <div className="border-2 rounded-[10px] flex flex-row justify-center mb-2  w-[75vw] sm:w-[30vw]">
            <img className="border-b-2 mb-4 " src={images[5]} alt="" />
         </div>
      </div>
   )
}

export default Contact