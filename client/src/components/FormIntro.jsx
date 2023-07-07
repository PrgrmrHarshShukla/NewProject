import { useNavigate } from 'react-router-dom'

function FormIntro() {
   const navigate = useNavigate()

   const handle1 = () => {
      navigate("/form")
   }

   const handle2 = () => {
      navigate("/form2")
   }

   const handle3 = () => {
      navigate("/form3")
   }

   const handle4 = () => {
      navigate("/form4")
   }

   const handle5 = () => {
      navigate("/form5")
   }

   const handle6 = () => {
      navigate("/form6")
   }

   const handle7 = () => {
      navigate("/form7")
   }

   const handle8 = () => {
      navigate("/form8")
   }

   const handle9 = () => {
      navigate("/form9")
   }

   const handle10 = () => {
      navigate("/form10")
   }

  return (
    <div className="ml-[30vw] mt-[10vh]">
      <h1 className="text-orange-500 font-bold underline">
         Forms
      </h1>
      <div className="flex flex-row flex-wrap max-w-[35vw] gap-[2vw]">
         <button 
            className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black"
            onClick={handle1}
         >
            Name Change Form
         </button>
         <button 
            className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black"
            onClick={handle2}
         >
            Form 2
         </button>
         <button 
            className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black"
            onClick={handle3}
         >
            Form 3
         </button>
        
         <button 
            className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black"
            onClick={handle4}
         >
            Form 4
         </button>
         <button 
            className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black"
            onClick={handle5}
         >
            Form 5
         </button>
         <button 
            className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black"
            onClick={handle6}
         >
            Form 6
         </button>
         <button 
            className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black"
            onClick={handle7}
         >
            Form 7
         </button>
         <button 
            className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black"
            onClick={handle8}
         >
            Form 8
         </button>
         <button 
            className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black"
            onClick={handle9}
         >
            Form 9
         </button>
         <button 
            className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black"
            onClick={handle10}
         >
            Form 10
         </button>
      </div>
    </div>
  )
}

export default FormIntro