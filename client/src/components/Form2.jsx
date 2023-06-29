import { useState } from 'react';
import {  useNavigate } from 'react-router-dom'


function Form2() {
   const navigate = useNavigate()
   const [name, setName] = useState('');
   const [age, setAge] = useState('');
   const [profession, setProfession] = useState('');
   const [residence, setResidence] = useState('');
   const [land, setLand] = useState('');
   const [group, setGroup] = useState('');
   const [declaration, setDeclaration] = useState('');
   const [signature, setSignature] = useState('');
   const [mobile, setMobile] = useState('');


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
      <div  className="m-4 pt-0 p-4 overflow-x-hidden overflow-y-auto border-2 border-black rounded-[10px] text-[12px] ">


      <div className="p-4">
         <h2 className="text-[15px] font-semibold ml-[0vw] ">तहसीलदार साहेब</h2>
         <h2 className="text-[15px] font-semibold ml-[0vw] mb-[1vh]">तथा कार्यकारी दंडाधिकारी अंबड</h2>
         <h3 className="text-[15px] font-semibold ml-[0vw] ">विषय: शेतकरी असल्या बाबतचे प्रमाणपत्र मिळण्यासाठी</h3>
         <p className="max-w-[60vw] ">
         मी.
         <input className="text-center" type="text" value={name} onChange={(e) => setName(e.target.value)} />
         वय.
         <input className="text-center" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
         वर्ष व्यवसाय.
         <input className="text-center" type="text" value={profession} onChange={(e) => setProfession(e.target.value)} />
         रा
         <input className="text-center" type="text" value={residence} onChange={(e) => setResidence(e.target.value)} />
         ता.अंबड जि. जालना येथील रहिवासी असून माझे नावे मोजे
         <input className="text-center" type="text" value={land} onChange={(e) => setLand(e.target.value)} />
         ता.अंबड या शिवारात गट नं
         <input className="text-center" type="text" value={group} onChange={(e) => setGroup(e.target.value)} />
         मध्ये
         <input className="text-center" type="text" value={declaration} onChange={(e) => setDeclaration(e.target.value)} />
         हे.
         <input className="text-center" type="text" value={signature} onChange={(e) => setSignature(e.target.value)} />
         जमीन असून मी शेतकरी आहे म्हणून मी शेतकरी बाबत शासकीय कामासाठी
         शेतकरी असल्याचे प्रमाणपत्राची आवश्यकता आहे करिता मी शेतकरी असून मला माझे
         शैक्षणिक अथवा शासकीय कामासाठी शेतकरी असल्याचे प्रमाणपत्राची आवश्यकता
         आहे तसेच मी प्रतीज्ञेवर लिहून देत आहे.
         </p>
         <p>
         वर दिलेली माहिती खरी आहे ती खोटी असल्याचे आढळून आल्यास मी भारतीय दंड
         विधान साहितेतिल कलम १९९ व २०० (२ ) अन्वेये शिक्षेस पात्र राहील याची मला
         जाणीव आहे
         </p>
         <p className="ml-[20vw]">
         अर्जदाराची सही:-
         <input className="text-center" type="text" />
         </p>
         <p className="ml-[20vw]">
         अर्जदाराची नाव: 
         <input className="text-center" type="text" value={signature} />
         </p>
         <p className="ml-[20vw] ">
         मोबाईल नंबर 
         <input className="text-center" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
         </p>
      </div>





      <div className="border-2 border-black rounded-[10px] p-4 text-center">
         <div className="border w-40 h-40">

         </div>
         <h2 className="text-[15px] font-semibold ml-[0vw] text-center">शासन निर्णय क्रमांक: प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-अ</h2>
         <h3 className="text-[15px] font-semibold ml-[0vw] text-center">प्रपत्र – अ</h3>
         <h3 className="text-[15px] font-semibold ml-[0vw] text-center">स्वयंघोषणापत्र</h3>
         <p className="max-w-[60vw] ml-[0vw]">
         श्री / श्रीमती
         <input className="text-center" type="text" value={name} />
         श्री
         <input className="text-center" type="text" />
         यांचा/यांची मुलगी/मुलगा पत्नी वय
         <input className="text-center" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
         वर्ष, व्यवसाय
         <input className="text-center" type="text" value={profession} onChange={(e) => setProfession(e.target.value)} />
         रा
         <input className="text-center" type="text" value={residence} onChange={(e) => setResidence(e.target.value)} />
         ता. अंबड जि. जालना याद्वारे घोषित करतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुतिनुसार खरी आहे.
         सदर माहिती खोटी आढळून आल्यास, भारतीय दंड सहिता अन्वेये आणि/ किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे.
         </p>
         <p>
         ठिकाण: 
         <input className="text-center" type="text" />
         अर्जदाराची सही:
         <input className="text-center" type="text" />
         </p>
         <p>
         दि: 
         <input className="text-center" type="text"  />
         अर्जदाराचे नाव: 
         <input className="text-center" type="text" value={name}  />
         </p>
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

export default Form2