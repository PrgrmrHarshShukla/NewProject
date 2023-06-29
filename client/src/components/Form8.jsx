import {  useNavigate } from 'react-router-dom'


function Form8() {
   const navigate = useNavigate()
   

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
   <div className="w-[80vw] mx-[10vw] h-auto">

      <div className="m-4 pt-0 p-4 overflow-x-hidden overflow-y-auto text-[12px]">
         <div>
            <h6 className="underline font-semibold text-center">शपथपत्र</h6>
            <h6 className="underline font-semibold text-center">आर्थिक दुष्ट्या दुर्बल घटकाचे प्रमाणपत्र बाबत</h6><br />
            
                                                                           

            <h6 className="underline font-semibold">तहसीलदार साहेब</h6>
            <h6 className="underline font-semibold"> तथा कार्यकारी दंडाधिकारी,</h6>
            <h6 className="underline font-semibold">तहसीलदार अंबड जि.जालना </h6>
             
                                                       
 
            मी श्री./श्रीमती/कु/कुमारी  <input type="text" className="text-center text-blue-500"  />  रा. <input type="text" className="text-center text-blue-500"  /> ता.अंबड जिल्हा जालना  येथील रहिवाशी वरील विषयी अर्ज सादर करतो कि, मी आपल्या कार्यालयात आर्थिक दुष्ट्या कमकुवत घटकाचे प्रमाणपत्र मिळवण्यासाठी अर्ज सादर केला आहे. तरी माझ्या पुढील चारही अटी व शर्ती मध्ये पात्र आहे. <br />
            1. 5 acres of agricultural land and above.<br />
            2. Residential flat of 1000 sq. Ft. And above.<br />
            3. Residential plot of 100 sq. Yards and above in notified municipalities.	<br />
            4. Residential plot of 190 sq. Yards and above in areas other than the notified.<br />


         </div>


         <div className="border-2 border-black p-4 rounded-[10px] mt-4">
            <div className="border w-28 h-28  "></div>

            <h5 className=" text-center text-[15px]">शासन निर्णय क्रमांक :प्रसुद्धा १६१४/ ३४५प्र.क्र ७१/१८/-37 </h5>
            <h5 className="mb-4 text-center text-[15px] font-semibold">स्वयंघोषणापत्र</h5>

            मी <input type="text" className="text-center text-blue-500" />  श्री <input type="text" className="text-center text-blue-500" />  यांचा/यांची मुलगी/मुलगा/पत्नी वय <input type="text" className="text-center text-blue-500" />  वर्ष, व्यवसाय <input type="text" className="text-center text-blue-500" /> रा <input type="text" className="text-center text-blue-500" /> ता. <input type="text" className="text-center text-blue-500" /> जि.जालना याद्वारे घोषित करतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुतिनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास, भारतीय  दंड सहिता  अन्वेये आणि/ किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे


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
           <p className="text-red-500 text-[16px] font-semibold">सदरील प्रमाणपत्रासाठी मी मध्ये चारही नियमामध्ये मी पात्र आहे. व कुटुंबातील इतर व्यक्तीच्या नावाने शहरी भागात कुठे हि जमीन,प्लॉट,घर  नाही  करीता मी सदरील शपथपत्र लिहून देत आहे.</p>
           वरील सर्व माहिती माझ्या व्यक्तीगत माहिती वस मजुतिनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास भारतीय दंड सहिता कलम 193(2),199 व 190 अन्वेये आणि/ किंवा संबंधितकायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे.
         </p>



         <div>
            
            <h6 className="underline font-semibold text-center mt-20">शपथपत्र</h6>
            प्रती, <br />
            मा. तहसीलदार साहेब,<br />
            तहसील कार्यालय, अंबड <br />

            विषय:-  मराठा आरक्षण SEBC या प्रवर्गाचा लाभ न घेता<br />
            EWS प्रमाणपत्र मिळणे बाबत<br />
            महोदय,<br />
               मी श्री / श्रीमती  <input type="text" className="text-center text-blue-500"  />  वय  <input type="text" className="text-center text-blue-500"  />  रा  <input type="text" className="text-center text-blue-500"  /> व्यवसाय <input type="text" className="text-center text-blue-500"  />  निवेदन करतो करते की मी    जातीने मराठा असून माझी जात शासनाने  SEBC या प्रवर्गामध्ये  समाविष्ट केलेली आहे . परंतु सदर आरक्षणाबाबत मा. सर्वोच न्यायालात प्रकरण प्रलंबित असल्यामुळे मा. उच्च न्यायालय खंडपीठ औरंगाबाद WPSNO: 19513/1919अन्वये सदर निकालात दिलेल्या अटीनुसार मी माझ्यासाठी व माझ्या मुला-मुलींच्या शिक्षणासाठी मराठा SEBC प्रवर्गाचा आरक्षणाचा लाभ घेणार नाही. तसे दोन्ही लाभ घेतल्यास कायदेशीर कार्यवाहीस मी पात्र आहे मला किंवा माझ्या पाल्यास शासनाने दिलेले सर्व शैक्षणिक व आर्थिक लाभ परत करण्यास तयार आहे . करिता मला EWS (आर्थिक दुर्बल घटक ) चे प्रमाणपत्र देण्यात यावे हि  विनंती <br />
                   उपरोक्त केलेले निवेदन मी शपथपत्र लिहून देते / देतो कि खरे व बरोबर आहे खोटे आढळून आल्यास शासनाने ठरविलेल्या कायदेशीर तरतुदीप्रमाणे कलम 199, 190 व 192 (2) नुसार मी शिक्षेस पात्र राहील याची मला जाणीव आहे. 
               <p className="ml-[50vw]">निवेदक </p>                                                       
               <p className="ml-[50vw]">सही: 
                  <input type="text" className="text-center text-blue-500"  /> 
               </p>                                                       
               <p className="ml-[50vw]">  नाव:-  <input type="text" className="text-center text-blue-500"  />  </p>            


            <div className="border-2 border-black p-4 rounded-[10px] mt-2">
               <div className="border w-28 h-28  -mt-4"></div>

               <h5 className=" text-center text-[15px]">शासन निर्णय क्रमांक :प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-अ</h5>
               <h5 className="text-center text-[15px] font-semibold">प्रपत्र–अ</h5>
               <h5 className="mb-4 text-center text-[15px] font-semibold">स्वयंघोषणापत्र</h5>

               मी <input type="text" className="text-center text-blue-500" />  श्री <input type="text" className="text-center text-blue-500" />  यांचा/यांची मुलगी/मुलगा/पत्नी वय <input type="text" className="text-center text-blue-500" />  वर्ष, व्यवसाय <input type="text" className="text-center text-blue-500" /> रा <input type="text" className="text-center text-blue-500" /> ता. <input type="text" className="text-center text-blue-500" /> जि.जालना याद्वारे घोषित करतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुतिनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास , भारतीय दंड सहिता कलम 193(2),199 व 190 अन्वेये आणि/ किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे. 


               <p className="ml-[10vw]">
                  ठिकाण: <input type="text" className="text-center text-blue-500 mr-[10vw]"  /> अर्जदाराची सही{' '}
                  <input type="text" className="text-center text-blue-500"  />
                  </p>
                  <p className="ml-[10vw] -mt-4">
                  दि: <input type="text" className="text-center text-blue-500 mr-[10vw]"  /> अर्जदाराचे नाव:-{' '}
                  <input type="text" className="text-center text-blue-500"  />
               </p>
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

export default Form8