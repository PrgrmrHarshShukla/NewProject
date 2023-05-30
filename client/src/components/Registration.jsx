import '@fortawesome/fontawesome-free/css/all.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from './firebase';


function Registration() {

   const statesOfIndia = [
      'Andhra Pradesh',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Chhattisgarh',
      'Goa',
      'Gujarat',
      'Haryana',
      'Himachal Pradesh',
      'Jharkhand',
      'Karnataka',
      'Kerala',
      'Madhya Pradesh',
      'Maharashtra',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Odisha',
      'Punjab',
      'Rajasthan',
      'Sikkim',
      'Tamil Nadu',
      'Telangana',
      'Tripura',
      'Uttar Pradesh',
      'Uttarakhand',
      'West Bengal',
      'Andaman and Nicobar Islands',
      'Chandigarh',
      'Dadra and Nagar Haveli and Daman and Diu',
      'Delhi',
      'Lakshadweep',
      'Puducherry',
    ];


   const navigate = useNavigate()
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   // const auth = getAuth()

   // console.log(password);
   // console.log(email);

   const createUser = async (e) => {
      e.preventDefault;
      try {
         const userCredential = await createUserWithEmailAndPassword(auth, email, password)
         const user = userCredential.user
         console.log("New user", user);

         navigate("/")
      }
      catch(err) {
         console.log(err);
      }
   }


   return (

      <div className="h-auto min-h-screen overflow-x-hidden w-screen flex flex-col  items-center">
         <div className="flex flex-row gap-2 justify-start border-b-2 border-gray-400 mb-4 w-[62vw] mt-4">
            <h2 className="text-orange-500">
               <i className="fas fa-user-plus"></i>
            </h2>
            <h2 className="text-orange-500 font-semibold"> रजिस्ट्रेशन</h2>
         </div>

         <div className="border-2 w-[70%] h-auto min-h-screen rounded-[10px] mb-4">
            <div className="bg-green-300 rounded-tl-[5px] rounded-tr-[5px]  w-full text-left py-1 flex flex-row gap-2 pl-2 h-[8vh] items-center ">
               <i className="fas fa-file mb-2"></i>
               <h5>मेंबर रजिस्ट्रेशन</h5>
            </div>     


            <form>



            <div className="mt-2 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Personal Details</p>   

               <div className="flex flex-row gap-4 mb-4">
                  <label htmlFor="">
                     <p className="mb-0">First Name *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[20vw]" placeholder="First Name" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Middle Name *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[20vw]" placeholder="Middle Name" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Last Name *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[20vw]" placeholder="Last Name" />
                  </label>
               </div>

               <div className="flex flex-row gap-4 mb-4">
                  <label htmlFor="">
                     <p className="mb-0">Date of Birth *</p>
                     <input required type="date" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[15vw]" placeholder="Date of Birth" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Gender *</p>
                     <select required className="border-2 pl-2 h-[4vh] rounded-[5px] w-[15vw]">
                        <option value="">Select Gender</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                     </select>
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">PAN No. *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[15vw]" placeholder="PAN No." />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Aadhar Card No. *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[15vw]" placeholder="Aadhar Card No." />
                  </label>
               </div>

               <label htmlFor="" className="w-[100%]">
                  <p className="mb-0">Organisation Name *</p>
                  <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[100%]" placeholder="Organisation Name" />
               </label>
            </div>   






            <div className="mt-8 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Address Details</p>
               
               <label htmlFor="" className="w-[100%]">
                  <p className="mb-0">Address *</p>
                  <textarea required type="text" className="pl-2 h-[8vh] border-2 rounded-[5px] w-[100%]" placeholder="Address Ex. Flat/Area/Village" />
               </label>
               <div className="flex flex-row gap-4">
                  <label htmlFor="">
                     <p className="mb-0">Select State *</p>
                     <select className="border-2 pl-2 h-[4vh] rounded-[5px] w-[20vw]">
                        <option value="">Select State</option>
                        {
                           statesOfIndia.map((element) => (
                              <option key={element} value="">{element}</option>
                           ))
                        }
                     </select>
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Enter City *</p>
                     <input required className="border-2 pl-2 h-[4vh] rounded-[5px] w-[20vw]" placeholder="Enter City" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Pin Code *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[20vw]" placeholder="PIN/ZIP code Ex, 000000" />
                  </label>
               </div>
            </div>    





            <div className="mt-8 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Contact Details</p>

               <div className="flex flex-row gap-4 mb-4">
                  <label htmlFor="">
                     <p className="mb-0">Phone Number</p>
                     <input type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[20vw]" placeholder="Phone Number" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Mobile Number *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[20vw]" placeholder="Mobile Number" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Email *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[20vw]" placeholder="Email Ex: aaa@aaa.com" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                     }} />
                  </label>
               </div>

            </div>





            <div className="mt-8 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Your Bank Details</p>

               <div className="flex flex-row gap-4 mb-4">
                  <label htmlFor="">
                     <p className="mb-0">Bank Name *</p>
                     <input type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[15vw]" placeholder="Bank Name Ex: SBI" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Account Number *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[15vw]" placeholder="Account Number" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">IFSC Code *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[15vw]" placeholder="IFSC Code" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Branch code *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[15vw]" placeholder="Branch code" />
                  </label>
               </div>

            </div>
            



            <div className="mt-8 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 py-1 font-semibold text-white">मेम्बरशिप फी RS. 2999/- खाली दिलेल्या बँक खात्यामध्ये जमा करावी</p>

               <div className="flex flex-row gap-4 mb-4">
                  <p className="border-2 bg-blue-800 max-w-max rounded px-2 font-semibold text-white">Bank</p>
                  <p className="border-2 bg-blue-800 max-w-max rounded px-2 font-semibold text-white">a/c</p>
               </div>

               <div className="flex flex-row gap-4 mb-4">
                  <p className="border-2 bg-blue-800 max-w-max rounded px-2 font-semibold text-white">A/C No.</p>
                  <p className="border-2 bg-blue-800 max-w-max rounded px-2 font-semibold text-white">IFSC</p>
                  <p className="border-2 bg-blue-800 max-w-max rounded px-2 font-semibold text-white">Branch Name</p>
               </div>
            </div>





            <div className="mt-8 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Document Files</p>

               <div>
                  <label htmlFor="">
                     <p className="mb-0">Your Photo *</p>
                     <input required type="file" className="h-[4vh] w-[15vw]" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Aadhar Photo *</p>
                     <input required type="file" className="h-[4vh] w-[15vw]" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">PAN Card Photo *</p>
                     <input required type="file" className="h-[4vh] w-[15vw]" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Attach Payment Proof *</p>
                     <input required type="file" className="h-[4vh] w-[15vw]" />
                  </label>
               </div>
            </div>





            <div className="mt-8 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Account Credentials</p>

               <div>
                  <label htmlFor="">
                     <p className="mb-0">Password *</p>
                     <input type="password" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[15vw]" placeholder="Enter Password" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Confirm Password *</p>
                     <input required type="password" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[15vw]" placeholder="Enter Password same as above" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                     }} />
                  </label>
               </div>
            </div>



            <button type="submit"  className="border-2 bg-green-500 py-1 rounded-[10px] mx-8 font-semibold my-20 px-4" onClick={createUser}>Register</button>


            </form>
         </div>



      </div>
   )
}

export default Registration