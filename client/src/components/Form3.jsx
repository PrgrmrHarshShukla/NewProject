import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
// import { UidContext } from './UidContext';


function Form3() {
   const navigate = useNavigate()
   const [name, setName] = useState('');
   const [age, setAge] = useState('');
   const [residence, setResidence] = useState('');
   const [declaration, setDeclaration] = useState('');
   const [place, setPlace] = useState('');
   const [date, setDate] = useState('');
   const [beneficiaryNameEnglish, setBeneficiaryNameEnglish] = useState('');
   const [beneficiaryNameMarathi, setBeneficiaryNameMarathi] = useState('');
   const [birthdate, setBirthdate] = useState('');
   const [mobile, setMobile] = useState('');
   // const { images } = useContext(UidContext)
   const [imageUrl, setImageUrl] = useState("");



   

   const handleCameraClick = () => {
      document.getElementById('fileInput').click();
    };

   const handleImage = (e) => {
      const file = e.target.files[0]
      if(file) {
         const reader = new FileReader();
      
         reader.readAsDataURL(file);
         
         reader.onload = (event) => {
            setImageUrl(event.target.result);
         }
      }
   }



   const goHome = (e) => {
      e.preventDefault()
      navigate("/")
   }
  

   const printCall = (e) => {
      e.preventDefault()
      document.getElementById("last").remove()      
      window.print()
      navigate("/")      
   }

  return (
    <div className="w-[100vw] max-w-[90vw] ml-[5vw] h-auto  ">
      

      <div  className="m-4 pt-0 p-4 overflow-x-hidden overflow-y-auto text-[12px] ">

         <div className=" p-4 border-2 border-black rounded-[10px] ">
            <h2 className="font-semibold text-center text-[18px] underline -mt-4 -mb-2">स्वघोषणापत्र</h2>
            {/* <hr className="-ml-[20vw] w-[100vw] border-2 border-black text-black" /> */}
            <img 
               className="border w-28 h-28 ml-[50vw] z-20 -mt-4"
               src={`${imageUrl}`}
               id="camera"
               onClick={handleCameraClick}
            />
            <input type="file" onChange={handleImage} id="fileInput" style={{ display: 'none' }} />
            <p className="max-w-[80vw]">
            मी
            <input type="text" className="text-blue-500 text-center" value={name} onChange={(e) => setName(e.target.value)} />
            वय
            <input type="text" className="text-blue-500 text-center" value={age} onChange={(e) => setAge(e.target.value)} />
            वर्ष व्यवसाय
            <input type="text" className="text-blue-500 text-center" value={residence} onChange={(e) => setResidence(e.target.value)} />
            राहणार
            <input type="text" className="text-blue-500 text-center" value={declaration} onChange={(e) => setDeclaration(e.target.value)} />
            ता
            <input type="text" className="text-blue-500 text-center" value={place} onChange={(e) => setPlace(e.target.value)} />
            जिल्हा जालना घोषित करतो/करते कि वरील सर्व माहिती माझ्या व्यक्तिगत माहिती व समजुती नुसार खरी आहे. सादर माहिती खोटी आढळून आल्यास. भारतीय दंड संहिता १९६० कलम १९९ व 200 व अन्य/संबधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन. याची मला पूर्ण जाणीव आहे.
            </p>
            <p  className="">
            ठिकाण
            <input type="text" className="text-blue-500 text-center mr-[10vw]" />
            अर्जदाराची सही
            <input type="text" className="text-blue-500 text-center"  />
            </p>
            <p  className="-mb-4">
            दिनांक
            <input type="text" className="text-blue-500 text-center mr-[10vw] -mb-8" value={date} onChange={(e) => setDate(e.target.value)} />
            अर्जदाराचे नाव
            <input type="text" className="text-blue-500 text-center -mb-8" value={name} onChange={(e) => setName(e.target.value)}  />
            </p>
            {/* <hr className="-ml-[20vw] w-[100vw] border-2 border-black" /> */}
            {/* <hr className="-ml-[20vw] w-[100vw] border-2 border-black" /> */}
         </div>




         <div className=" p-4 mt-4 pt-0 border-2 border-black rounded-[10px] ">
            <h2 className="font-semibold text-center text-[18px] underline -mb-2 mt-2 ">रहिवाशी स्वघोषनापत्र</h2>
            {/* <hr className="-ml-[20vw] w-[100vw] border-2 border-black text-black" /> */}
            <img 
               className="border w-28 h-28 ml-[50vw] z-20 -mt-4"
               // style={{
               //    backgroundImage: `url(${imageUrl})`,
               //    backgroundSize: 'cover',
               //    backgroundPosition: 'center',
               // }}
               src={`${imageUrl}`}
               id="camera"
               onClick={handleCameraClick}
            />
            <p className="max-w-[80vw]">
            मी
            <input type="text" className="text-blue-500 text-center" value={name} onChange={(e) => setName(e.target.value)} />
            वय
            <input type="text" className="text-blue-500 text-center" value={age} onChange={(e) => setAge(e.target.value)} />
            वर्ष राहणार
            <input type="text" className="text-blue-500 text-center" value={residence} onChange={(e) => setResidence(e.target.value)} />
            ता
            <input type="text" className="text-blue-500 text-center" value={place} onChange={(e) => setPlace(e.target.value)} />
            जिल्हा जालना येथील रहिवाशी असून या द्वारे घोषित करतो/करते कि, मी या ठिकाणी मागील
            <input type="text" className="text-blue-500 text-center"  />
            वर्षापासून राहत/वास्तव्यास आहे. वरील सर्व माहिती माझ्या व्यक्तिगत माहिती व समजुती नुसार खरी आहे. सादर माहिती खोटी आढळून आल्यास. भारतीय दंड संहिता १९६० कलम १९९ व 200 व अन्य/संबधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन. याची मला पूर्ण जाणीव आहे.
            </p>
            <p>
            ठिकाण
            <input type="text" className="text-blue-500 text-center  mr-[10vw]"  />
            अर्जदाराची सही
            <input type="text" className="text-blue-500 text-center"  />
            </p>
            <p className="-mb-4">
            दिनांक
            <input type="text" className="text-blue-500 text-center  mr-[10vw]" />
            अर्जदाराचे नाव
            <input type="text" className="text-blue-500 text-center" value={name} onChange={(e) => setName(e.target.value)}  />
            </p>
            {/* <hr className="-ml-[20vw] w-[100vw] border-2 border-black text-black" /> */}

            </div>





            <div className="mt-4 p-2 border-2 border-black rounded-[10px]">
               <div className="flex gap-2 ">
                  <h2 className="text-[15px] font-semibold">लाभार्थ्याचे नाव(इंग्रजी) :  </h2>
                  <input type="text" className="text-blue-500 text-center  w-[20vw]" value={beneficiaryNameEnglish} onChange={(e) => setBeneficiaryNameEnglish(e.target.value)} />
               </div>

               <div className="flex gap-2">
                  <h2 className="text-[15px] font-semibold">लाभार्थ्याचे नाव(मराठी) :  </h2>
                  <input type="text" className="text-blue-500 text-center  w-[20vw]" value={beneficiaryNameMarathi} onChange={(e) => setBeneficiaryNameMarathi(e.target.value)} />
               </div>

               <div className="flex gap-2">
                  <h2 className="text-[15px] font-semibold">जन्म तारीख (TC प्रमाणे) :  </h2>
                  <input type="text" className="text-blue-500 text-center  w-[20vw]" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
               </div>

               <div className="flex gap-16">
                  <h2 className="text-[15px] font-semibold">मोबाईल :  </h2>
                  <input type="text" className="text-blue-500 text-center w-[40vw]" value={mobile} onChange={(e) => setMobile(e.target.value)} />
               </div>

               <div className="flex gap-2">
                  <h2 className="text-[15px] font-semibold">कागदपत्रे: </h2>
                  <ol className="flex gap-2">
                     <li>{`1) TC/बोनाफाईड/प्रवेश निर्गम`}</li>
                     <li>{`2) आधार कार्ड`}</li>
                     <li>{`3) रेशन कार्ड/वीज बील/गॅस कार्ड`}</li>
                  </ol>
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

export default Form3