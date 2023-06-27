import { useContext, useState } from "react"

import { db, storage } from "./firebase" 
import {  doc, getDoc } from "firebase/firestore"

import { UidContext } from "./UidContext"
import { getDownloadURL, ref } from "firebase/storage"
import { useNavigate } from "react-router-dom"


function Profile() {
   const [data, setData] = useState([])
   const [DOB, setDOB] = useState("")
   const { uid } = useContext(UidContext)
   const navigate = useNavigate()


   const getUserData = async () => {
      const docRef = doc(db, "userData", uid)
      const docSnap = await getDoc(docRef)
      if( docSnap.exists() ) {
         // console.log(docSnap.data());
         setData(docSnap.data())
         let dob = docSnap.data().dob.split("-")
         let temp = dob[0]
         dob[0] = dob[2]
         dob[2] = temp
         setDOB(dob.join("-"))
      }
      else {
         console.error("No such document");
      }
   }
   getUserData()

   const getUserImages = async () => {
      try {
         const url1 = await getDownloadURL(ref(storage, `gs://janta-suvidha.appspot.com/${uid}: userPhoto`)) 
         const img1 = document.getElementById("photo");
         img1.setAttribute('src', url1)

         const url2 = await getDownloadURL(ref(storage, `gs://janta-suvidha.appspot.com/${uid}: aadhar`)) 
         const img2 = document.getElementById("aadhar");
         img2.setAttribute('src', url2)
         
         const url3 = await getDownloadURL(ref(storage, `gs://janta-suvidha.appspot.com/${uid}: panCard`)) 
         const img3 = document.getElementById("panCard");
         img3.setAttribute('src', url3)

         const url4 = await getDownloadURL(ref(storage, `gs://janta-suvidha.appspot.com/${uid}: paymentProof`)) 
         const img4 = document.getElementById("paymentProof");
         img4.setAttribute('src', url4)

      }
      catch(err) {
         // location.reload()
         console.log(err);
      }
   }
   getUserImages()

   const handleUpdate = async (e) => {
      e.preventDefault()
      navigate("/registration")
      // alert("Fill in all the details below with modified data.")
   }

   return (
      <div className="ml-[20vw] w-[80vw] p-8 pt-40 text-left h-auto min-h-screen">
         {
            data != [] 
            ? 
            <div className="h-auto overflow-x-hidden">

               <h1 className="font-bold text-5xl text-orange-500 underline mb-8">Your Profile</h1>
               <h6 className="flex flex-row gap-[10px] items-center">
                  First Name: <small className="text-xl">{data.firstName}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  Middle Name: <small className="text-xl">{data.middleName}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  Last Name: <small className="text-xl">{data.lastName}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  Date Of Birth: <small className="text-xl">{DOB}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  Gender: <small className="text-xl">{data.gender}</small>
               </h6>

               {/* <h6 className="flex flex-row gap-[10px] items-center">
                  PAN Card Number: <small className="text-xl">{data.pan}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  Aadhar Card Number: <small className="text-xl">{data.aadhar}</small>
               </h6>
               
               <h6 className="flex flex-row gap-[10px] items-center">
                  Organisation Name: <small className="text-xl">{data.org}</small>
               </h6> */}

               <h6 className="flex flex-row gap-[10px] items-center">
                  Address: <small className="text-xl">{data.address}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  State: <small className="text-xl">{data.state}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  City: <small className="text-xl">{data.city}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  PIN Code: <small className="text-xl">{data.pin}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  Mobile Number: <small className="text-xl">{data.mob}</small>
               </h6>

               {/* <h6 className="flex flex-row gap-[10px] items-center">
                  Bank Name: <small className="text-xl">{data.bank}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  Account Number: <small className="text-xl">{data.acc}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  IFSC Code: <small className="text-xl">{data.ifsc}</small>
               </h6>

               <h6 className="flex flex-row gap-[10px] items-center">
                  Branch Code: <small className="text-xl">{data.branch}</small>
               </h6> */}

               <h2 className="font-bold underline text-purple-500 font-serif mt-20">Your Image</h2>
               <img className="w-[50vw] sm:w-[25vw] h-[40vh]" id="photo" alt="My Image" />

               <hr className="border-2 border-black" />
               
               <h2 className="font-bold underline text-purple-500 font-serif mt-20">Aadhar Image</h2>
               <img className="w-[50vw] sm:w-[25vw] h-[40vh]" id="aadhar" alt="Aadhar Image" />

               <hr className="border-2 border-black" />
               
               <h2 className="font-bold underline text-purple-500 font-serif mt-20">PAN Card Image</h2>
               <img className="w-[50vw] sm:w-[25vw] h-[40vh]" id="panCard" alt="PAN Card Image" />

               {/* <hr className="border-2 border-black" />
               
               <h2 className="font-bold underline text-purple-500 font-serif mt-20">Payment Proof</h2>
               <img className="w-[50vw] sm:w-[25vw] h-[40vh]" id="paymentProof" alt="Payment Proof" /> */}

               <hr className="border-2 border-black" />

               <button className="border-2 bg-green-500 border-green-500 py-1 rounded-[10px] font-semibold my-20 px-4 hover:border-2 hover:border-black" onClick={handleUpdate}>Update Data</button>
               
            </div> 
            : 
            "Some error in fetching data"
         }
         
      </div>
   )
}

export default Profile