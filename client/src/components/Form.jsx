import {  useNavigate } from 'react-router-dom'
import top from "./topLeft.png"

// import { UidContext } from './UidContext'
import {  useState } from 'react'

function Form() {
   const navigate = useNavigate()
   // const { images } = useContext(UidContext)

   const [name, setName] = useState("")
   const [name1, setName1] = useState("")
   const [name2, setName2] = useState("")
   // const [imageUrl, setImageUrl] = useState("");

   // const [fatherName, setFatherName] = useState("")
   // const [surname, setSurname] = useState("")
   

   // const handleCameraClick = () => {
   //    document.getElementById('fileInput').click();
   // };

   // const handleImage = (e) => {
   //    const file = e.target.files[0]
   //    if(file) {
   //       const reader = new FileReader();
      
   //       reader.readAsDataURL(file);
         
   //       reader.onload = (event) => {
   //          setImageUrl(event.target.result);
   //       }
   //    }
   // }



   const goHome = (e) => {
      e.preventDefault()
      navigate("/")
   }
  

   const printCall = (e) => {
      e.preventDefault()
   
      document.getElementById("print").style.visibility = "hidden"
      document.getElementById("nav").style.visibility = "hidden"
      document.getElementById("input11").style.border = "none"
      document.getElementById("input12").style.border = "none"
      document.getElementById("input13").style.border = "none"
      document.getElementById("input14").style.border = "none"
      document.getElementById("input15").style.border = "none"
      document.getElementById("input9").style.border = "none"
      document.getElementById("last").remove()
      
      window.print()
      navigate("/")
      
   }

   // function numLimit() {
   //    let num = document.getElementById("input15");
   //    console.log(num.value)
   // }
   // numLimit()



  return (
   <div id="main" className="flex flex-col">
   <div className="m-4 pt-0 p-4 overflow-x-hidden overflow-y-auto border-2 border-black rounded-[10px] text-[12px] ">

      
            <img 
               className="w-28 h-28 z-20"
               src={top}
               id="camera"
               // onClick={handleCameraClick}
            />
            {/* <input type="file" onChange={handleImage} id="fileInput" style={{ display: 'none' }} /> */}


      <div className="flex flex-col w-[100vw] h-[12vh] items-center justify-center mb-2 ml-0 sm:-ml-12 mt-2 sm:-mt-8">
         <span>GOVERMENT OF MAHARASHTRA</span>
         <span className="text-center">DIRECTORATE OF GOVERNMENT PRINTING, STATIONERY AND PUBLICATION</span>
         <span>FORM FOR CHANGE OF NAME</span>
         <span>NOTICE</span>
      </div>
 
      <div className="flex flex-col mb-1">
      <span>N.B-</span> 
      <span>Instructions may be followed carefully before filling up this form. Only one word should be written in each space printed below. Please fill up this form in English version and in BLOCK LETTERS only It is hereby notified that the undersigned has changed his/her name from</span>
      </div>

      <div>
         <div className="flex flex-row gap-1">
            <span>Old Name:</span> 
            <input type="text" className="w-[25vw] ml-1 text-left pl-2 text-[10px] border-2 border-black" id="input1" />
            <input type="text" className="w-[25vw] text-left pl-2 text-[10px] border-2 border-black" id="input2" />
            <input type="text" className="w-[25vw] text-left pl-2 text-[10px] border-2 border-black" id="input3" />
         </div>
         <div className="flex flex-row w-[80vw]">
            <span>To</span>
            <div className="ml-[12vw]">Name</div>
            <div className="ml-[18vw]">Father or Husband Name</div>
            <div className="ml-[18vw]">Surname</div>            
         </div>
         <div className="flex flex-row gap-1">
            <span>New Name:</span> 
            <input type="text" className="w-[25vw] text-left pl-2 text-[10px] border-2 border-black" id="input4" onChange={(e) => {
               setName(e.target.value)
            }} />
            <input type="text" className="w-[25vw] text-left pl-2 text-[10px] border-2 border-black" id="input5" onChange={(e) => {
               setName1(e.target.value)
            }}  />
            <input type="text" className="w-[25vw] text-left pl-2 text-[10px] border-2 border-black" id="input6" onChange={(e) => {
               setName2(e.target.value)
            }}  />            
         </div>
      </div>

      <div className="mt-4">
         <p>Note :- Government accepts no responsibility as to the authenticity of the contents of the notice. Since they are based entirely on the application of the concerned persons without verification of documents. </p>
      </div>

      <div className="flex flex-row w-[50vw] justify-between">         
         
         <div className="mt-12 flex flex-col max-w-[30vw]">
            <span>Signature of the Guardian</span>
            <span>{`(In case of Minor)`}</span>
         </div>
         <div  className="mt-12 flex flex-col max-w-[40vw]">
            <span>
               {`Signature in Old name/ Thumb Impression with Name and Date`}
            </span>
            <span>
               {`(Write down the name of the person in the above space who has signed above)`}
            </span>
         </div>
      </div>

      <div className="mt-4">
         <div>To, </div>
         <div>
            THE DIRECTOR, 
         </div>
         <div className="ml-4">
            Government Printing, Stationery and Publications, Maharashtra, Mumbai 400 004. Kindly publish the above Notice in the next issue of the Maharashtra Government Gazette, Part II. 
         </div>
      </div>

      <div className="w-[80vw] flex flex-row gap-4 items-center mt-4">
         <small>Reason for change of Name       </small>
         <textarea id="input9" className="text-left pl-2 border-2 border-black w-[50vw]" cols="20" rows="1" />
      </div>

      <div className="mt-24 ml-[50vw]">
         <p>Signature in New Name/Thumb Impression with Name and Date</p>
      </div>


      <div className="flex flex-col gap-2">
         <div className="flex flex-row w-[80vw] gap-3">
            <span>FOR CORRESPONDING ADDRESS:</span>
            {/* <textarea type="text" className="text-left pl-2 text-[10px] border-2 border-black w-[50vw]" id="input10" rows="1" /> */}
         </div>
         <div className="flex flex-row w-[80vw] gap-3">
            <span>New Name:</span>
            <input type="text" className="text-left pl-2 text-[10px] border-2 border-black w-[50vw]" id="input11" value={`${name} ${name1} ${name2}`} />
         </div>
         <div className="flex flex-row w-[80vw] gap-8">
            <span>Address:</span>
            <textarea type="text" className="text-left pl-2 text-[10px] border-2 border-black w-[50vw]" id="input12" rows="1" />
         </div>
         <div className="flex flex-row w-[80vw] gap-6">
            <span>Pin Code:</span>
            <input type="text" className="text-left pl-2 text-[10px] border-2 border-black w-[50.2vw]" id="input13" />
         </div>
         <div className="flex flex-row w-[80vw] gap-9">
            <span>Tel. No.</span>
            <input type="number" className="text-left pl-2 text-[10px] border-2 border-black w-[50vw]" id="input14" />
         </div>
         <div className="flex flex-row w-[80vw] gap-3">
            <span>Mobile No.</span>
            +91
            <input type="number" className="text-left pl-2 text-[10px] border-2 border-black w-[47.5vw]" id="input15" />
         </div>
      </div>


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

export default Form