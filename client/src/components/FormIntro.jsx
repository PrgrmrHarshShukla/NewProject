import { useNavigate } from 'react-router-dom'

function FormIntro() {
   const navigate = useNavigate()

   const handle1 = () => {
      navigate("/form")
   }

   const handle2 = () => {
      navigate("/form2")
   }

  return (
    <div className="ml-[30vw] mt-[30vh]">
      <h1 className="text-orange-500 font-bold">
         Forms
      </h1>
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
    </div>
  )
}

export default FormIntro