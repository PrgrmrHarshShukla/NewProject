import '@fortawesome/fontawesome-free/css/all.css';


function Footer() {
   return (
      <div className="w-[80vw] h-[5vh] bg-orange-400 flex flex-row justify-around items-center">
         <h6>Copyright © All Rights Reserved</h6>
         <h6>Powered by <a href="...">SHANTAI E-SERVICES PVT.LTD.</a></h6>

         <div className="flex flex-row gap-4 items-center text-black text-2xl">
            <a href="...">
               <i className="fab fa-youtube text-red-600"></i>  
            </a>
            <a href="...">
               <i className="fab fa-facebook"></i>  
            </a>
         </div>
      </div>
   )
}

export default Footer