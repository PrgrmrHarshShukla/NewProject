import '@fortawesome/fontawesome-free/css/all.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
   doc,
   setDoc,
   collection
} from "firebase/firestore"
import { ref, uploadBytes } from 'firebase/storage';
import { db, storage } from "./firebase"

import { UidContext } from './UidContext';


export default function Registration() {

   const inputs = document.querySelectorAll("input[name='userData']")
   const inputData = []
   for (let input of inputs) {
      inputData.push(input.value)
   }
   // console.log(inputData);
   
   const selectInputs = document.querySelectorAll("select[name='userData']")
   const selectInputsData = []
   for (let selectInput of selectInputs) {
      selectInputsData.push(selectInput.value)
   }
   // console.log(selectInputsData);


   const auth = getAuth()
   const navigate = useNavigate()
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [address, setAddress] = useState("");
   const [userInputData, setUserInputData] = useState(inputData)   
   const [userSelectedData, setUserSelectedData] = useState(selectInputsData)   
   const [userPhoto, setUserPhoto] = useState(null)
   const [aadhar, setAadhar] = useState(null)
   const [panCard, setPanCard] = useState(null)
   const [paymentProof, setPaymentProof] = useState(null)

   const { uid, setUid } = useContext(UidContext)

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
      'Puducherry'
    ];
   // const docData = {
   //    firstName: userInputData[0],
   //    middleName: userInputData[1],
   //    lastName: userInputData[2],
   //    dob: userInputData[3],
   //    pan: userInputData[4],
   //    aadhar: userInputData[5],
   //    org: userInputData[6],
   //    city: userInputData[7],
   //    pin: userInputData[8],
   //    mob: userInputData[9],
   //    bank: userInputData[10],
   //    acc: userInputData[11],
   //    ifsc: userInputData[12],
   //    branch: userInputData[13],
   //    gender: userSelectedData[0],
   //    state: userSelectedData[1],
   //    address: address,
   // }
    
   const updateUser = async (e) => {
      e.preventDefault()
      try {
         const userCredential = await signInWithEmailAndPassword(auth, email, password)

         const user = userCredential.user
         // console.log(user.uid, "logged in");
         setUid(user.uid)
         // update data   **************
         const docRef = doc(collection(db, "userData"), `${uid}`)
         const settingDoc = await setDoc(docRef, {
            firstName: userInputData[0],
            middleName: userInputData[1],
            lastName: userInputData[2],
            dob: userInputData[3],
            pan: userInputData[4],
            aadhar: userInputData[5],
            org: userInputData[6],
            city: userInputData[7],
            pin: userInputData[8],
            mob: userInputData[9],
            bank: userInputData[10],
            acc: userInputData[11],
            ifsc: userInputData[12],
            branch: userInputData[13],
            gender: userSelectedData[0],
            state: userSelectedData[1],
            address: address,
         })         
          alert( "Data updated.");
      }
      catch(err) {
         console.log(err);
      }
   }

   const createUser = async (e) => {
      e.preventDefault();
      if( 
         email == "" ||
         password == "" ||
         address == "" ||
         aadhar == null ||
         panCard == null ||
         userPhoto == null ||
         paymentProof == null
       ) {
         alert("Please fill in all the details.")
      }
      else {
         try {
            // create user   **************
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            setUid(user.uid)
            console.log("New user", user);
            alert("Welcome.\nYou have successfully registered at Janta Suvidha.");
            
   
   
   
            // upload data   **************
            const docRef = doc(collection(db, "userData"), `${user.uid}`)
            const settingDoc = await setDoc(docRef, {
               firstName: userInputData[0],
               middleName: userInputData[1],
               lastName: userInputData[2],
               dob: userInputData[3],
               pan: userInputData[4],
               aadhar: userInputData[5],
               org: userInputData[6],
               city: userInputData[7],
               pin: userInputData[8],
               mob: userInputData[9],
               bank: userInputData[10],
               acc: userInputData[11],
               ifsc: userInputData[12],
               branch: userInputData[13],
               gender: userSelectedData[0],
               state: userSelectedData[1],
               address: address,
            })         
            console.log( "created ", docRef.id);
   
   
   
   
   
            // upload documents ***********
            const storageRef1 = ref(storage, `${user.uid}: userPhoto`)
            const uploadTask1 = await uploadBytes(storageRef1, userPhoto)
            
            const storageRef2 = ref(storage, `${user.uid}: aadhar`)
            const uploadTask2 = await uploadBytes(storageRef2, aadhar)
   
            const storageRef3 = ref(storage, `${user.uid}: panCard`)
            const uploadTask3 = await uploadBytes(storageRef3, panCard)
   
            const storageRef4 = ref(storage, `${user.uid}: paymentProof`)
            const uploadTask4 = await uploadBytes(storageRef4, paymentProof)
   
            console.log("Images uploaded");
   
            
   
            navigate("/profile");
         }
         catch(err) {
            console.log(err);
            alert(`We are sorry, an unexpected error occured ${err.message.slice(15)}`);
         }
      }
   }
     


   return (

      <div className="h-auto min-h-screen overflow-x-hidden w-[80vw] ml-[20vw] mt-2 flex flex-col  items-center">
         <div className="flex flex-row  overflow-x-hidden gap-2 justify-start border-b-2 border-gray-400 mb-4 w-[62vw] mt-4">
            <h2 className="text-orange-500">
               <i className="fas fa-user-plus"></i>
            </h2>
            <h2 className="text-orange-500 font-semibold"> रजिस्ट्रेशन</h2>
         </div>

         <div className="border-2 w-[90%] overflow-x-hidden h-auto min-h-screen rounded-[10px] mb-4 pb-4">
            <div className="bg-green-300 rounded-tl-[5px] rounded-tr-[5px]  w-full text-left py-1 flex flex-row gap-2 pl-2 h-[8vh] items-center ">
               <i className="fas fa-file mb-2"></i>
               <h5>मेंबर रजिस्ट्रेशन</h5>
            </div>     


            <form id="userDataForm">



            <div className="mt-2 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Personal Details</p>   

               <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <label htmlFor="">
                     <p className="mb-0">First Name *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[0] = e.target.value
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[20vw]" placeholder="First Name"  
                     />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Middle Name *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[1] = e.target.value
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[20vw]" placeholder="Middle Name" 
                     />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Last Name *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[2] = e.target.value
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[20vw]" placeholder="Last Name" 
                     />
                  </label>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <label htmlFor="">
                     <p className="mb-0">Date of Birth *</p>
                     <input 
                        name="userData" 
                        required 
                        type="date" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[3] = e.target.value
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[15vw]" placeholder="Date of Birth" 
                     />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Gender *</p>
                     <select 
                        name="userData" 
                        required 
                        onChange={(e) => setUserSelectedData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userSelectedData[0] = e.target.value
                              ]
                           )
                        })}
                        className="border-2 pl-2 h-[4vh] rounded-[5px] w-[50vw] sm:w-[15vw]" 
                     >
                        <option value="Select Gender">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                     </select>
                  </label>
                  <label htmlFor="" className="hidden">
                     <p className="mb-0">PAN No. *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[4] = " "
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[15vw]" placeholder="PAN No." 
                     />
                  </label>
                  <label htmlFor=""  className="hidden">
                     <p className="mb-0">Aadhar Card No. *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[5] = " "
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[15vw]" placeholder="Aadhar Card No." 
                     />
                  </label>
               </div>

               <label htmlFor="" className="w-[100%] hidden">
                  <p className="mb-0">Organisation Name *</p>
                  <input 
                     name="userData" 
                     required 
                     type="text" 
                     onChange={(e) => setUserInputData(prev => {
                        return (
                           [
                              ...prev, 
                              userInputData[6] = " "
                           ]
                        )
                     })}
                     className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[98%]" placeholder="Organisation Name" 
                  />
               </label>
            </div>   






            <div className="mt-8 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Address Details</p>
               
               <label htmlFor="" className="w-[100%]">
                  <p className="mb-0">Address *</p>
                  <textarea 
                     required 
                     type="text" 
                     className="pl-2 h-[8vh] border-2 rounded-[5px] w-[100%]" 
                     placeholder="Address Ex. Flat/Area/Village" 
                     onChange={(e) => {
                        setAddress(e.target.value)
                     }} 
                  />
               </label>
               <div className="flex flex-col sm:flex-row gap-4">
                  <label htmlFor="">
                     <p className="mb-0">Select State *</p>
                     <select 
                        name="userData" 
                        onChange={(e) => setUserSelectedData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userSelectedData[1] = e.target.value
                              ]
                           )
                        })}
                        className="border-2 pl-2 h-[4vh] rounded-[5px] w-[50vw] sm:w-[20vw]" 
                     >
                        <option value="Select State">Select State</option>
                        {
                           statesOfIndia.map((element) => (
                              <option key={element}  value={element}>{element}</option>
                           ))
                        }
                     </select>
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Enter City *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[7] = e.target.value
                              ]
                           )
                        })}
                        className="border-2 pl-2 h-[4vh] rounded-[5px] w-[50vw] sm:w-[20vw]" placeholder="Enter City" 
                     />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Pin Code *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[8] = e.target.value
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[20vw]" placeholder="PIN/ZIP code Ex, 000000" 
                     />
                  </label>
               </div>
            </div>    





            <div className="mt-8 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Contact Details</p>

               <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <label htmlFor="">
                     <p className="mb-0">Phone Number</p>
                     <input type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[20vw]" placeholder="Phone Number" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Mobile Number *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[9] = e.target.value
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[20vw]" placeholder="Mobile Number" 
                     />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Email *</p>
                     <input required type="text" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[20vw]" placeholder="Email Ex: aaa@aaa.com" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                     }} />
                  </label>
               </div>

            </div>





            <div className="mt-8 px-4 hidden">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Your Bank Details</p>

               <div className="flex flex-col  sm:flex-row gap-4 mb-4">
                  <label htmlFor="">
                     <p className="mb-0">Bank Name *</p>
                     <input 
                        name="userData" 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[10] = " "
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[15vw]" placeholder="Bank Name Ex: SBI" 
                     />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Account Number *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[11] = " "
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[15vw]" placeholder="Account Number" 
                     />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">IFSC Code *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[12] = " "
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[15vw]" placeholder="IFSC Code" 
                     />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Branch code *</p>
                     <input 
                        name="userData" 
                        required 
                        type="text" 
                        onChange={(e) => setUserInputData(prev => {
                           return (
                              [
                                 ...prev, 
                                 userInputData[13] = " "
                              ]
                           )
                        })}
                        className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[15vw]" placeholder="Branch code" 
                     />
                  </label>
               </div>

            </div>
            



            <div className="mt-8 px-4 hidden">
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

               <div className="flex flex-col gap-[10px]">
                  <label htmlFor="">
                     <p className="mb-0">Your Photo *</p>
                     <input 
                        required 
                        type="file" 
                        onChange={(e) => {
                           setUserPhoto(e.target.files[0])
                        }}
                        className="h-[4vh] w-[40vw]" 
                     />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Aadhar Photo *</p>
                     <input 
                        required 
                        type="file" 
                        onChange={(e) => {
                           setAadhar(e.target.files[0])
                        }}
                        className="h-[4vh] w-[40vw]" 
                     />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">PAN Card Photo *</p>
                     <input 
                        required 
                        type="file" 
                        onChange={(e) => {
                           setPanCard(e.target.files[0])
                        }}
                        className="h-[4vh] w-[40vw]" 
                     />
                  </label>
                  <label htmlFor="" className="hidden">
                     <p className="mb-0">Attach Payment Proof *</p>
                     <input 
                        required 
                        type="file" 
                        onChange={(e) => {
                           setPaymentProof(" . ")
                        }}
                        className="h-[4vh] w-[40vw]" 
                     />
                  </label>
               </div>
            </div>





            <div className="mt-8 px-4">
               <p className="border-2 bg-blue-600 max-w-max rounded px-2 font-semibold text-white">Account Credentials</p>

               <div className="flex flex-col sm:flex-row gap-4">
                  <label htmlFor="">
                     <p className="mb-0">Password *</p>
                     <input type="password" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[20vw]" placeholder="Enter Password" />
                  </label>
                  <label htmlFor="">
                     <p className="mb-0">Confirm Password *</p>
                     <input required type="password" className="pl-2 h-[4vh] border-2 rounded-[5px] w-[50vw] sm:w-[20vw]"placeholder="Enter Password again" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                     }} />
                  </label>
               </div>
            </div>



            <div
               className="flex flex-col sm:flex-row"
            >

               <button type="submit" className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] mx-8 font-semibold mt-12  sm:my-20 px-4 hover:border-2 hover:border-black" onClick={createUser}>Register</button>

               <button className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] mx-8 font-semibold mt-12 sm:my-20 px-4 hover:border-2 hover:border-black" onClick={updateUser}>Update</button>
            </div>


            </form>
         </div>



      </div>
   )
}


//  Registration