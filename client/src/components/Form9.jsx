// import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'


function Form9() {
   const navigate = useNavigate()
   // const [imageUrl, setImageUrl] = useState("")
   

   const goHome = (e) => {
      e.preventDefault()
      navigate("/")
   }
  

   const printCall = (e) => {
      e.preventDefault()
      document.getElementById("last").remove()      
      window.print()
      navigate("/")      
   }
   

  return (
   <div className="w-[80vw] mx-[10vw] h-auto">
      <div className="w-[80vw] h-[25vh]  border-2 border-black p-4 rounded-[10px] ">
         <img src="src\components\emblemQR.png"  className="w-[78vw] h-[25vh]" />
      </div>
      <div>
         <h5 className="text-center text-[15px] font-semibold">तहसीलदार कार्यालय</h5>

         <h5 className="text-center text-[15px] font-semibold">३ वर्षसाठी उत्पन्नाचे माणप</h5>
       
      </div>

      <div className="m-4 pt-0 p-4 overflow-x-hidden overflow-y-auto text-[12px]">
      </div>

      <div id="last" className="w-[90vw] flex flex-row justify-center gap-[5vw] mb-8">
        <button 
          className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] sm:ml-0 ml-[35vw]  font-semibold  px-4  hover:border-2  hover:border-black" 
          id="print"
          onClick={printCall}
        >Preview</button>
        <button 
          id="nav"
          className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold px-4 hover:border-2 hover:border-black" 
          onClick={goHome}>Home</button>
      </div>


    </div>
  )
}

export default Form9