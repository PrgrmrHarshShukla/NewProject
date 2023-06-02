import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom"
import auth from "./firebase";


function Login() {


   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const loginUser = async (e) => {
      e.preventDefault;
      try {
         const userCredential = await signInWithEmailAndPassword(auth, email, password)

         const user = userCredential.user
         console.log(user, "logged in");
         setEmail("");
         setPassword("")
         alert("Welcome, You are logged in!")

      }
      catch(err) {
         console.log(err);
      }
   }

   return (
      <div className="border-2 rounded-[10px] border-gray-300  flex flex-col gap-2 items-center">


         <div className="bg-green-300 rounded-tl-[5px] rounded-tr-[5px]  w-full text-center py-1">
            <h2>Retailer Login</h2>
         </div>
          
         <input placeholder="Email" type="email" className="border-2 border-gray-300 rounded-[10px] text-lg text-black w-[90%] h-[5vh] pl-4" value={email} onChange={(e) => {
            setEmail(e.target.value)
         }} />
         <input placeholder="Password" type="password" className="border-2 border-gray-300 rounded-[10px] text-lg text-black w-[90%] h-[5vh] pl-4" value={password} onChange={(e) => {
            setPassword(e.target.value)
         }} />

         <div className="flex flex-row justify-between w-[85%] mt-4">
            <div>
               <p className="text-sm">Forgot Username or Password...</p>
               <p className="text-sm">Login Here</p>
               <h6 className="text-sm"><Link className="no-underline" to="/registration">New registrations here</Link></h6>
            </div>
            <div className="flex flex-col justify-center">
               <button className="border-2 bg-blue-500 px-2 py-1 rounded-[10px] font-semibold" onClick={loginUser}>Login</button>
            </div>
         </div>

      </div>
   )
}

export default Login