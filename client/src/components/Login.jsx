import { Link } from "react-router-dom"


function Login() {
   return (
      <div className="border-2 rounded-[10px] border-gray-300 h-auto md:h-[40vh] flex flex-col gap-2 items-center">


         <div className="bg-green-300 rounded-tl-[5px] rounded-tr-[5px]  w-full text-center py-1">
            <h2>Retailer Login</h2>
         </div>
          
         <input placeholder="Username" type="text" className="border-2 border-gray-300 rounded-[10px] text-lg text-black w-[90%] h-[5vh] pl-4" />
         <input placeholder="Password" type="password" className="border-2 border-gray-300 rounded-[10px] text-lg text-black w-[90%] h-[5vh] pl-4" />

         <div className="flex flex-row justify-between w-[85%] mt-4">
            <div>
               <p className="text-sm">Forgot Username or Password...</p>
               <p className="text-sm">Login Here</p>
               <h6 className="text-sm"><Link className="no-underline" to="/registration">New registrations here</Link></h6>
            </div>
            <div className="flex flex-col justify-center">
               <button className="border-2 bg-blue-500 px-2 py-1 rounded-[10px] font-semibold">Login</button>
            </div>
         </div>

      </div>
   )
}

export default Login