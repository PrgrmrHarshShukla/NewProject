import '@fortawesome/fontawesome-free/css/all.css';

function Contact() {
   return (
      <div>
         <ul className="flex flex-col gap-2 justify-center mt-4">
            <li className="flex flex-row items-center  gap-2">
               <i className="fas fa-phone"></i>
               <div>Info - +91 9370024002, +91 9370026002</div>
            </li>
            <li className="flex flex-row items-center gap-2">
               <i className="fas fa-mobile-alt "></i>
               <div>Support - +91 9370062002</div>
            </li>
            <li className="flex flex-row items-center gap-2">
               <i className="fas fa-envelope "></i>
               <div>info@aaplekendra.com</div>
            </li>
         </ul>
         <div className="border-2 rounded-[10px] flex flex-row justify-center mb-2">
            <img className="border-b-2 mb-4 w-[98%]" src="src/assets/text.png" alt="" />
         </div>
      </div>
   )
}

export default Contact