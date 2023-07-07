import { useContext, useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import { UidContext } from './UidContext';


function Form5() {
   const navigate = useNavigate()
   // const [applicantName, setApplicantName] = useState('');
   const [caste, setCaste] = useState('');
   const [childName1, setChildName1] = useState('');
   const [childName2, setChildName2] = useState('');
   const [childName3, setChildName3] = useState('');
   const [childName4, setChildName4] = useState('');
   const [childName5, setChildName5] = useState('');
   const [serviceCenterName, setServiceCenterName] = useState('');
   const [serviceCenterSignature, setServiceCenterSignature] = useState('');
  //  const [name, setName] = useState('');
   const [age, setAge] = useState('');
   const [occupation, setOccupation] = useState('');
   const [city, setCity] = useState('');
   const [date, setDate] = useState('');
   const [applicantName, setApplicantName] = useState('');
   const {images} = useContext(UidContext)

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
        <div>
        <h3 className=" text-[15px]  mt-2"> प्रती, </h3>
        <h3 className=" text-[15px] ">मा.उपविभागीय अधिकारी साहेब,</h3>
        <h4 className=" text-[15px] ">उपविभागीय कार्यालय, अंबड</h4>
        <h4  className=" text-[15px] font-semibold">विषय: अर्जदार यांची नमुना स्वाक्षरी स्वयंघोषणापत्र</h4>
        <p>
          अर्जदार: सत्य प्रतिज्ञेवर लिहून देतो/देते कि, मी वरील पत्यावर राहत आसून मी{' '}
          <input type="text" className="text-blue-500 text-center" value={caste} onChange={(e) => setCaste(e.target.value)} /> या जातीचा/जातीची आहे. स्वत:ला/माझा मुलगा/मुलगी यांना{' '}
          <input type="text" className="text-blue-500 text-center" value={childName1} onChange={(e) => setChildName1(e.target.value)} /> या जातीचे जात प्रमाणपत्र/नॉन-क्रिमीलेयर प्रमाणपत्र शैक्षणिक/सरकारी/नोकरीच्या कामासाठी हवे आहे. मी सुशिक्षित/अशिक्षित आहे करिता मी खालील माझी नमुना स्वाक्षरी करीत आहे.
        </p>
        <ol>
          <li>
            <span>1)</span>
            <input type="text" className="text-blue-500 text-center" value={childName1} onChange={(e) => setChildName1(e.target.value)} />
          </li>
          <li>
            <span>2)</span>
            <input type="text" className="text-blue-500 text-center" value={childName2} onChange={(e) => setChildName2(e.target.value)} />
          </li>
          <li>
            <span>3)</span>
            <input type="text" className="text-blue-500 text-center" value={childName3} onChange={(e) => setChildName3(e.target.value)} />
          </li>
          <li>
            <span>4)</span>
            <input type="text" className="text-blue-500 text-center" value={childName4} onChange={(e) => setChildName4(e.target.value)} />
          </li>
          <li>
            <span>5)</span>
            <input type="text" className="text-blue-500 text-center" value={childName5} onChange={(e) => setChildName5(e.target.value)} />
          </li>
        </ol>
        <p>
          सक्षम <br />
          सेवा केंद्र चालकाचे नाव: <input type="text" value={serviceCenterName} onChange={(e) => setServiceCenterName(e.target.value)} /> <br />
          सेवा केंद्र चालकाची स्वाक्षरी <input
            type="text"
            value={serviceCenterSignature}
            onChange={(e) => setServiceCenterSignature(e.target.value)}
          />
        </p>
      </div>
  


      <div className="border-2 border-black rounded-[10px] p-4 mb-[5vh]">
        <h1 className="text-[15px] ">शासन निर्णय क्रमांक :प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-अ</h1>
        <h2 className="text-[15px] font-semibold">प्रपत्र – अ</h2>
        <h3 className="text-[15px] font-semibold">स्वयंघोषणापत्र</h3>
        <div className="w-28 h-28 border ml-[40vw] -mt-16 mb-2">
          <img className="w-28 h-28" src={images[7]} />
        </div>

        <p>
          मी <input type="text" className="text-center text-blue-500" value={caste}  /> यांचा/यांची मुलगी/मुलगा पत्नी वय{' '}
          <input type="text" className="text-center text-blue-500" value={age} onChange={(e) => setAge(e.target.value)} /> वर्ष, व्यवसाय{' '}
          <input type="text" className="text-center text-blue-500" value={occupation} onChange={(e) => setOccupation(e.target.value)} /> रा{' '}
          <input className="text-center text-blue-500" type="text" value={city} onChange={(e) => setCity(e.target.value)} /> याद्वारे घोषित करतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुतिनुसार खरी आहे.
          सदर माहिती खोटी आढळून आल्यास, भारतीय दंड सहिता अन्वेये आणि/ किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे.
        </p>

        <p>
          ठिकाण :- <input className="text-center text-blue-500" type="text" value={date} onChange={(e) => setDate(e.target.value)} /> अर्जदाराची सही:{' '}
          <input className="text-center text-blue-500" type="text" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
        </p>

        <p>
          दि :- <input className="text-center text-blue-500" type="text" /> अर्जदाराचे नाव: <input type="text" />
        </p>

      </div>


      <div className=" p-4">
      <h5>
        प्रती, <br />
        मा.उपविभागीय अधिकारी साहेब, <br />
        उपविभागीय कार्यालय, अंबड
      </h5>
      <p>
        मी 
        <input type="text" className="text-center text-blue-500" />
        या जातीचा/जातीची असून हि जात /जमात केंद्र शासन, मिनिस्ट्री ऑफ पर्सोनल, पब्लिक ग्रीवेन्सेस अँड पेन्शन्स डिपार्टमेंट ऑफ पर्सोनल अँड ट्रेनिंग कार्यालयीन - ज्ञापन क्रमांक - ३६०१२/२२/९३- इएसटीटी (एस.सी.टी.)दि.०८सप्टेंबर,१९९३ अन्वये सुधारित केल्याप्रमाणे तसेच केंद्र शासनाने आणि राज्यशासनाने यासंदर्भात वेळोवेळी निर्गमित केलेल्या सूचने (Notification) नुसार शासन निर्णयानुसार शासनसेवेतील आरक्षणाच्या लाभाकरिता इतर मागासवर्ग प्रवर्गात गणल्या जाते. सदर जात / जमात राज्य शासनाने विहितकेलेल्या मागासवर्गीयाच्या यादीमधील 
        <input type="text" className="text-center text-blue-500" />
        या प्रवर्गात मोडते.
      </p>
    
      <p>
        मी दृढपूर्वक असेही कथन करतो/करते कि, केंद्र शासनाच्या क्र.- ३६०१२/२२/९३- इ एस टीटी (एस.सी .टी.) दि. ०८ सप्टेंबर,१९९३ च्या कार्यालयीन ज्ञापनासोबत या परिशिष्टातील स्तंभक्र -३ मध्ये नमूद केलेल्या व कार्यालयीन-ज्ञापनक्र-३६०३३/३/२००४-इएसटीटी(आर.इ.एस)दि.१४ऑक्टो.२००४,कार्यालयीन ज्ञापनक्र.३६०३३/३/२००४ इएसटीटी (आर.इ.एस) दि.१४ ऑक्टो. २००८, अन्वये सुधारित केल्या प्रमाणे तसेच केंद्र शासनाने आणि राज्य शासनाने या संदर्भात वेळोवेळी निर्गमित केलेल्या सूचने (Notification) नुसार / शासन निर्णयानुसार आरक्षणाच्या लाभाकरिता मी विमुक्त जाती/भटक्या जमाती/इतर मागासवर्ग /विशेष मागास प्रवर्गातील उन्नत व प्रगत व्यक्ती /गट (क्रीमिलेयर) या मध्ये मी मोडत नाही.
      </p>
      </div>

      <div className="border-2 border-black rounded-[10px] p-4 mb-4">
        <p>
          प्रपत्र – अ <br />
          स्वयघोषणपत्र
        </p>
        <div className="border w-20 h-20 ml-[50vw] -mt-4">
        <img className="w-20 h-20" src={images[7]} />

        </div>
        <p>
          श्री/श्रीमती 
          <input type="text" className="text-center text-blue-500" />
          श्री 
          <input type="text" className="text-center text-blue-500" />
          याचा/यांची मुलगा/मुलगी /पत्नी वय 
          <input type="text" className="text-center text-blue-500" />
          वर्ष व्यवसाय 
          <input type="text" className="text-center text-blue-500" />
          रा 
          <input type="text" className="text-center text-blue-500" />
          ता. 
          <input type="text" className="text-center text-blue-500" />
          जि.जालना याद्वारे घोषित करतो की /करते की ,वरील सर्व माहिती माझ्या व्यक्तिगत माहिती व समजुतीनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास,भारतीय दंड सहिता अन्वये/किवा संबधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मिशिक्षेस पात्र राहीन याची मला पूर्णजाणीव आहे.
        </p>
        <p>
          ठिकाण :- 
          <input type="text" className="text-center text-blue-500" />
          अर्जदाराची सही : 
          <input type="text" className="text-center text-blue-500" />
          <br />
          दिनक :- 
          <input type="text" className="text-center text-blue-500" />
          अर्जदाराचे नाव : 
          <input type="text" className="text-center text-blue-500" />
        </p>
      </div>

      <div>
      <p>
        मी दृढपूर्वक असेही कथन करतो/करते कि, माझ्या आई किंवा वडिलांचा किंवा आई आणि वडील या दोघाचाही दर्जा /उत्पन्न ३१ मार्च २०२३ रोजी संपणाऱ्या आर्थिक वर्ष अखेरीस वेळोवेळी विहित केलेल्या अटी व शर्तीनुसार इतर मागासवर्ग प्रवर्गातील उन्नत व प्रगत व्यक्ती /गट (क्रीमिलेयर) यांच्या करिता असलेल्या मर्यादेमध्ये मोडते. दिलेली माहिती खोटी आढळून आल्यास मिळणारा/मिळालेला लाभ रद्द करून उमेदवारा विरुद्धभा. दं.वि. नुसार कार्यवाही करण्यात येईल
      </p>
      </div>


      <div>
      <h2 className="font-semibold text-[15px] text-center">अर्जसोबत जोडावयाच्या शपथपत्राचा नमुना</h2>
      <h2 className="font-semibold text-[15px] text-center">परिशिष्ट “ब”</h2>
      <p>
        महाराष्ट्र राज्य शासनाच्या विमुक्त जाती / इतर मागासवर्ग / विशेष
        मागासप्रवर्गातील अर्जदाराने आरक्षणाचा फायदा मिळण्याकरिता उन्नत व प्रगत व्यक्ती /
        गट (क्रिमीलेयर) यामध्ये मोडत नसल्याबाबत सादर करावयाचे शपथपत्र
      </p>
      <p>
        मी. श्री. श्रीमती / कुमार/कुमारी. 
        <input className="text-center text-blue-500" />
        श्री  
        <input className="text-center text-blue-500" />
         यांचा मुलगा/यांची मुलगी वय  
        <input className="text-center text-blue-500" />
         वर्षे, व्यवसाय 
        <input className="text-center text-blue-500" />
         गाव / शहर 
        <input className="text-center text-blue-500" />
        तहसील  
        <input className="text-center text-blue-500" />
        जिल्हा.
        <input className="text-center text-blue-500" />
        राज्य. महाराष्ट्र येथील रहिवासी असुन याव्दारे दृढपुर्वक कथन करतो कि, मी  
        <input className="text-center text-blue-500" />
         या जातीचा/जमातीचा असुन.यांचा ही जात/ जमात केंद्र शासन, मिनिस्ट्री ऑफ पसोनेल, पब्लिक प्रिकन्सेस अॅण्ड पेशन्स डीपार्टमेंट ऑफ पर्सोनेल अॅण्ड ट्रेनिंग कडील कार्यालयीन ज्ञानप क्रमांक - ३६०१२/२२/९३ - इएसटीटी (एस.सी. टी.) दिनांक ८ सप्टेंबर, १९९३ अन्वये सुधारित केल्याप्रमाणे तसेच केंद्र शासनाने आणि राज्य शासनाने या संदर्भात वेळोवेळी निर्गमित केलेल्या सुचणे (Notification) नुसार / शासन निर्णयानुसार शासन सेवेतील आरक्षणाच्या फयद्याकरीता इतर मागासवर्ग प्रवर्गात गणल्या जाते. सदर जात/जमात राज्य शासनाने विहित केलेल्या मागासवर्गीयांच्या यादीमधील  
        <input className="text-center text-blue-500" />
          या प्रवार्गत मोडतो.
        मी दृढपुर्वक असेही कथन करतो / करते की, केंद्र शासनाच्या क्रमांक - ३६०१२/२२/९३ इएसटीटी (एस.सी. टी.) दिनांक ८ सप्टेंबर,१९९३ च्या कार्यालयीन स्थापनासोबतच्या परिशिष्टातील स्तंभ क्र -३ मध्ये नमुद केलेल्या व कार्यालीन मापन क्रमांक - ३६०३३/५/२००४ - इएसटीटी (आर.ई.एस.) दिनांक १४ ऑक्टोबर, २००४ कार्यालयीन मापन क्रमांक - ३६०३३/३/२००४ - (आर.इ.एस.) दिनांक १४ ऑक्टोबर, २००८ अन्वये सुधारित केल्याप्रमाणे तसेच केंद्र शासनाने आणि राज्य शासनाने या संदर्भात वेळोवेळी निर्गमित केलेल्या सुचणे (Notification) नुसार / शासन निर्णयानुसार आरक्षणाच्य फायद्याकरिता मी विमुक्त जाती/भटक्या जमाती/इतर मागासवर्ग / विशेष मागासप्रवर्गातील उत्पन्न व प्रगत व्यक्ती / गट        ( क्रिमीलेयर) यामध्ये मी मोडत नाही.
        मी दृढपुर्वक असेही कथन करतो / करते कि, माझ्या आई किंवा वडील या दोघांचाही दर्जा / उत्पन्न हे ३१ मार्च २०२२ रोजी संपणाऱ्या आर्थिक अखेरीस वेळोवेळी विहित केलेल्या अटी व शर्तीनुसार इतर मागासवर्ग प्रवर्गातील उन्नत व प्रगत व्यक्ती / गट (क्रिमीलेयर ) यांची करिता असलेल्या मर्यादेमध्ये मोडतो.
      </p>
      <p>
        स्थळ :- 
        <input type="text" className="text-center text-blue-500" />
        अर्जदाराची स्वाक्षरी : 
        <input type="text" className="text-center text-blue-500" />
        <br />
        दिनक :- 
        <input type="text" className="text-center text-blue-500" />
        अर्जदाराचे नाव : 
        <input type="text" className="text-center text-blue-500" />
      </p>

      <p>
        ( उमेदवाराने स्वतः स्वाक्षरी न केलेले शपथपत्र / खुलासा रद्द्वाबत ठरविण्यात येईल.)<br />
        ( सुचना :- सदर आरक्षणाचा फायदा हा तात्पुरता स्वरूपाचा असुन तो उमेदवाराने जात प्रमाणपत्र / उत्पन्न व प्रगत गट / व्यक्ती यामध्ये मोडत नसल्यासंदर्भात सादर केलेल्या कागदपत्रांच्या / पुराव्याच्या पडताळणी संदर्भात विहित केलेल्या कार्यपद्धतीच्या अधीन राहील. जर उमेदवाराने इतर मागासवर्ग प्रवर्गात मोडत असल्याबाबत किंवा उन्नत व प्रगत गट / व्यक्ती यामध्ये मोडत नसल्यासंधर्भात संबंधित अर्जासोबत जोडलेली कागदपत्रे आणि पुरावे पडताळणी खोटे अथवा बनावट आढळल्यास कोणतीही पूर्व सुचना किंवा कोणतीही कारणीमास न देता त्या उमेदवारास देण्यात आलेले आरक्षण विषयक फायदा कायम स्वरूपी रद्द ठरविण्यात येईल. तसेच सदर प्रकरणी संबंधित उमेदवारास जबाबदार धरण्यातयेऊन खोटे अथवा बनावट कागदपत्रे / पुरावे दाखल केल्याबद्दल त्याच्या विरुद्ध भारतीय दंड विधान कायदयानुसार विहित केलेली कार्यवाही करण्यात येईल.)

      </p>

      <div className="border-2 border-black rounded-[10px] p-4 mb-4">
        <p>
          प्रपत्र – अ <br />
          स्वयघोषणपत्र
        </p>
        <div className="border w-20 h-20 ml-[50vw] -mt-4">
        <img className="w-20 h-20" src={images[7]} />

        </div>
        <p>
          श्री/श्रीमती 
          <input type="text" className="text-center text-blue-500" />
          श्री 
          <input type="text" className="text-center text-blue-500" />
          याचा/यांची मुलगा/मुलगी /पत्नी वय 
          <input type="text" className="text-center text-blue-500" />
          वर्ष व्यवसाय 
          <input type="text" className="text-center text-blue-500" />
          रा 
          <input type="text" className="text-center text-blue-500" />
          ता. 
          <input type="text" className="text-center text-blue-500" />
          जि.जालना याद्वारे घोषित करतो की /करते की ,वरील सर्व माहिती माझ्या व्यक्तिगत माहिती व समजुतीनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास,भारतीय दंड सहिता अन्वये/किवा संबधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मिशिक्षेस पात्र राहीन याची मला पूर्णजाणीव आहे.
        </p>
        <p>
          ठिकाण :- 
          <input type="text" className="text-center text-blue-500" />
          अर्जदाराची सही : 
          <input type="text" className="text-center text-blue-500" />
          <br />
          दिनक :- 
          <input type="text" className="text-center text-blue-500" />
          अर्जदाराचे नाव : 
          <input type="text" className="text-center text-blue-500" />
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

export default Form5