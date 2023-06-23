import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { UidContext } from "./UidContext";


function Login() {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const auth = getAuth()

   const { setUid } = useContext(UidContext)

   const loginUser = async (e) => {
      e.preventDefault;
      try {
         const userCredential = await signInWithEmailAndPassword(auth, email, password)

         const user = userCredential.user
         console.log(user.uid, "logged in");
         setUid(user.uid)
         setEmail("");
         setPassword("")
         alert("Welcome to Janta Suvidha.\nYou are logged in!")

      }
      catch(err) {
         console.log(err);
         alert(`Sorry, ${err.message.slice(22, 36)}`);
      }
   }

   return (
      <div className="border-2 rounded-[10px] border-gray-300  flex flex-col gap-2 items-center w-[65vw] sm:w-[30vw]">


         <div className="bg-green-300 rounded-tl-[5px] rounded-tr-[5px]  w-full text-center py-1">
            <h2>Retailer Login</h2>
         </div>
          
         <input placeholder="Email" type="email" className="border-2 border-gray-300 rounded-[10px] text-lg text-black w-[90%] h-[5vh] pl-4" value={email} onChange={(e) => {
            setEmail(e.target.value)
         }} />
         <input placeholder="Password" type="password" className="border-2 border-gray-300 rounded-[10px] text-lg text-black w-[90%] h-[5vh] pl-4" value={password} onChange={(e) => {
            setPassword(e.target.value)
         }} />

         <div className="flex flex-col sm:flex-row justify-between w-[85%] mt-4">
            <div>
               <p className="text-sm">Forgot Username or Password...</p>
               <p className="text-sm">Login Here</p>
            </div>
            <div className="flex flex-col justify-center gap-4">
               <button className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold px-4 hover:border-2 hover:border-black" onClick={loginUser}>Login</button>
               <h6 className="text-sm"><Link className="no-underline" to="/registration">New registrations here</Link></h6>
            </div>
         </div>

      </div>
   )
}

export default Login