import '@fortawesome/fontawesome-free/css/all.css';
import Footer from "./Footer"


function ContactPage() {
   return (
      <div className="h-[100vh] w-[80vw] flex flex-col items-center justify-center ml-[20vw]">

         <div className="flex flex-row gap-2 justify-start border-b-2 border-gray-400 mb-4 w-[50vw]">
            <h2 className="text-orange-500">
               <i className="fas fa-globe"></i>
            </h2>
            <h2 className="text-orange-500 font-semibold">संपर्क</h2>
         </div>


         <div className="w-[65%] flex flex-row justify-center gap-2 mb-20">



            <div className="border-2 rounded-[10px] w-1/2 h-[55vh]">
               <div className="bg-green-300 rounded-tl-[8px] rounded-tr-[8px]  w-full text-center py-1 font-semibold">
               <h5>संपर्क माहिती</h5>
               </div>
               <ul className="flex flex-col gap-4 justify-center mt-4">
                  <li className="flex flex-row items-center  gap-2">
                     <i className="fas fa-home"></i>
                     <div>
                        CHANGALE NAGAR , AMBAD PIN 431204 
                     </div>
                  </li>
                  <li className="flex flex-row items-center  gap-2">
                     <i className="fas fa-phone"></i>
                     <div>Info - +91 7722005539 , +91 7722005540</div>
                  </li>
                  <li className="flex flex-row items-center gap-2">
                     <i className="fas fa-mobile-alt"></i>
                     <div>Support - +91 7722005540</div>
                  </li>
                  <li className="flex flex-row items-center gap-2">
                     <i className="fas fa-envelope "></i>
                     <div>devnathdhembre@gmail.com</div>
                  </li>
               </ul>
            </div>



            <div className="border-2 rounded-[10px] w-1/2 h-[55vh]">
               <div className="bg-green-300 rounded-tl-[5px] rounded-tr-[5px]  w-full text-center py-1 font-semibold">
                  <h5>चौकशी</h5>
               </div>

               <div className="flex flex-col gap-1 mt-1 px-1">
                  <input type="text" placeholder="Full Name" className="pl-2 border-2 rounded-[8px] h-12" />
                  <div className="flex flex-row gap-2">
                     <input type="text" placeholder="Mobile Number" className="pl-2 w-1/2 border-2 rounded-[8px] h-12" />
                     <input type="email" placeholder="Email" className="pl-2 w-1/2 border-2 rounded-[8px] h-12" />
                  </div>
                  <input type="text" placeholder="Subject" className="pl-2 border-2 rounded-[8px] h-12" />
                  <textarea placeholder="Message" className="pl-2 border-2 rounded-[8px] h-32" />

                  <button className="bg-blue-500 w-12 ml-4 mt-4 rounded-[10px] font-semibold py-1">Send</button>
               </div>


            </div>




         </div>
         <Footer />
      </div>
   )

}


export default ContactPage