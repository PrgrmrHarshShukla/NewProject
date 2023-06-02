function Profile() {
   const userData = JSON.parse(localStorage.getItem("data"))
   

   // console.log(userData);
   // console.log(userData[0]);
   return (
      <div className="ml-[20vw] w-[80vw] border-4 rounded-[10px] p-8 pt-40 text-left h-auto min-h-screen">
         <div>
            <span>Name: </span>
            <span>{userData[0] + " " + userData[1] + " " + userData[2]}</span>
         </div>
         
         <div>
            <span>Date of Birth{" (YYYY-MM-DD)"}: </span>
            <span>{userData[3]}</span>
         </div>
         
         <div>
            <span>PAN Number: </span>
            <span>{userData[4]}</span>
         </div>
         
         <div>
            <span>Aadhar Number: </span>
            <span>{userData[5]}</span>
         </div>
         
         <div>
            <span>Aadhar Number: </span>
            <span>{userData[5]}</span>
         </div>
         
      </div>
   )
}

export default Profile