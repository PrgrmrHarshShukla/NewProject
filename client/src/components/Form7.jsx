import { useState } from 'react';
import {  useNavigate } from 'react-router-dom'
// import { UidContext } from './UidContext'
// import { useContext } from 'react'


function Form7() {
   const navigate = useNavigate()
   const [imageUrl, setImageUrl] = useState("");
   // const {images} = useContext(UidContext)
  

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



  return (
   <div className="w-[80vw] mx-[10vw] h-auto">

      <div  className="m-4 pt-0 p-8 overflow-x-hidden overflow-y-auto  text-[12px] ">
         प्रती,           <br />                                        
         मा. तहसीलदार साहेब,<br />
         तहसील कार्यालय, अंबड<br />
            मी  <input className="text-center text-blue-500" type="text" />   या जातीचा/जातीची असून हि जात /जमात केंद्र शासन, मिनिस्ट्री ऑफ पर्सोनल, पब्लिक ग्रीवेन्सेस अँड पेन्शन्स डिपार्टमेन्ट ऑफ पर्सोनल अँड ट्रेनिंग कार्यालयीन - ज्ञापन क्रमांक - ३६०१२/२२/९३- इएसटीटी (एस.सी.टी.)दि.०८सप्टेंबर,१९९३ अन्वये सुधारित केल्याप्रमाणे तसेच केंद्र शासनाने आणि राज्यशासनाने यासंदर्भात वेळोवेळी निर्गमित केलेल्या सूचने (Notification) नुसार शासन निर्णयानुसार शासनसेवेतील आरक्षणाच्या लाभाकरिता इतर मागासवर्ग प्रवर्गात गणल्या जाते. सदर जात / जमात राज्य शासनाने विहितकेलेल्या मागासवर्गीयाच्या यादीमधील  <input className="text-center text-blue-500" type="text" />  या प्रवर्गात मोडतो / मोडते. <br />
         मी दृढपूर्वक असेही कथन करतो/करते कि, केंद्र शासनाच्या क्र.- ३६०१२/२२/९३- इ एस टीटी (एस.सी .टी.)           दि. ०८ सप्टेंबर,१९९३ च्या कार्यालयीन ज्ञापनासोबत या परिशिष्टातील स्तंभक्र -३ मध्ये नमूद केलेल्या व कार्यालयीन- ज्ञापनक्र-३६०३३/३/२००४-इएसटीटी(आर.इ.एस)दि.१४ऑक्टो.२००४,कार्यालयीन-ज्ञापनक्र.३६०३३/३/२००४ इएसटीटी (आर.इ.एस) दि.१४ऑक्टो. २००८, अन्वये सुधारित केल्या प्रमाणे तसेच केंद्र शासनाने आणि राज्य शासनाने या संदर्भात वेळोवेळी निर्गमित केलेल्या सूचने (Notification) नुसार / शासन निर्णयानुसार आरक्षणाच्या लाभाकरिता मी विमुक्त जाती/भटक्या जमाती/इतर मागासवर्ग /विशेष मागास प्रवर्गातील उन्नत व प्रगत व्यक्ती /गट (क्रीमिलेयर) या मध्ये मी मोडत नाही . <br />

         <div className="border-2 border-black px-4 py-1 rounded-[10px] mt-2 mb-2">
            <img 
               className="border w-40 h-40 ml-[40vw] z-20"
               // style={{
               //    backgroundImage: `url(${imageUrl})`,
               //    backgroundSize: 'cover',
               //    backgroundPosition: 'center',
               // }}
               src={`${imageUrl}`}
               id="camera"
               onClick={handleCameraClick}
            />
            <input type="file" onChange={handleImage} id="fileInput" style={{ display: 'none' }} />

            <h5 className=" text-center text-[15px]">प्रपत्र–अ</h5>
            <h5 className="mb-4 text-center text-[15px] font-semibold">स्वयंघोषणापत्र</h5>

            मी <input type="text" className="text-center text-blue-500" />  श्री <input type="text" className="text-center text-blue-500" />  यांचा/यांची मुलगी/मुलगा/पत्नी वय <input type="text" className="text-center text-blue-500" />  वर्ष, व्यवसाय <input type="text" className="text-center text-blue-500" /> रा <input type="text" className="text-center text-blue-500" /> ता. <input type="text" className="text-center text-blue-500" /> जि.जालना याद्वारे घोषित करते की ,वरील सर्व माहिती माझ्या व्यक्तिगत माहिती व समजुती नुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास , भारतीय दंड सहिता अन्वये / किवा संबधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मि शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे.

            <p className="ml-[10vw]">
               ठिकाण: <input type="text" className="text-center text-blue-500 mr-[10vw]"  /> अर्जदाराची सही{' '}
               <input type="text" className="text-center text-blue-500"  />
               </p>
               <p className="ml-[10vw]">
               दि: <input type="text" className="text-center text-blue-500 mr-[10vw]"  /> अर्जदाराचे नाव:-{' '}
               <input type="text" className="text-center text-blue-500"  />
            </p>
         </div>

         <p>
            मी दृढपूर्वक असेही कथन करतो/करते कि, माझ्या आई किंवा वडिलांचा किंवा आई आणि वडील या दोघाचाही दर्जा /उत्पन्न <input type="text" className="text-center text-blue-500"  /> रोजी संपणाऱ्या आर्थिक वर्ष अखेरीस वेळोवेळी विहित केलेल्या अटी व शर्तीनुसार इतर मागासवर्ग प्रवर्गातील उन्नत व प्रगत व्यक्ती /गट (क्रीमिलेयर) यांच्या करिता असलेल्या मर्यादेमध्ये मोडते. दिलेली माहिती खोटी आढळून आल्यास मिळणारा/मिळालेला लाभ रद्द करून उमेदवारा विरुद्धभा. दं.वि. नुसार  कार्यवाही करण्यात येईल.
         </p>

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

export default Form7