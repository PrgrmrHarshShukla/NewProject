import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
// import { UidContext } from './UidContext'
// import { useContext } from 'react'
import './print.css'


function Form10() {
   const navigate = useNavigate()
  //  const {images} = useContext(UidContext)
   const [name, setName] = useState('');
   const [grandfatherName, setGrandfatherName] = useState('');
   const [fatherName, setFatherName] = useState('');
   const [uncleName, setUncleName] = useState('');
   const [brotherName, setBrotherName] = useState('');
   const [applicantName, setApplicantName] = useState('');
   const [applicantSiblingName, setApplicantSiblingName] = useState('');
   const [applicantUncleName, setApplicantUncleName] = useState('');
   const [applicantSisterName, setApplicantSisterName] = useState('');
   const [imageUrl, setImageUrl] = useState("")


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
      <div className="m-4 pt-0 p-4 overflow-x-hidden overflow-y-auto text-[12px]">
        <div>
          <h2 className="font-semibold text-center">शपथपत्र</h2>
          <p>
          मा. तहसिलदारसाहेब तथा कार्यकारी दंडाधिकारी, अंबड. यांच्या समोर <br />
          विषय: जात प्रमाणपत्र मिळणेबाबत द्यावयाचे शपथपत्र <br />
          मी: <input type="text" className="text-center text-blue-500" value={name} onChange={(e) => setName(e.target.value)} /> <br />
          वय: <input type="text" className="text-center text-blue-500" /> <br />
          धंदा: <input type="text" className="text-center text-blue-500" /> <br />
          राहणार: <input type="text" className="text-center text-blue-500" /> ता. <input type="text" className="text-center text-blue-500" /> जि. <input type="text" className="text-center text-blue-500" /> <br />
          </p>
          <p>
          प्रती, <br />
          मा. उपविभागीय अधिकारी साहेब, <br />
          उपविभागीय कार्यालय अंबड. <br />
          सत्य प्रतिज्ञेवर लिहुन देतो/देते कि, मी वरील पत्यावर कायम राहत असून मी{' '}
          <input type="text" className="text-center text-blue-500" /> या जातीचा/जातीची आहे. मला माझ्या मुलीचे/मुलाचे{' '}
          <input type="text" className="text-center text-blue-500" /> या जातीचे प्रमाणपत्र शैक्षणिक/सरकारी/शिक्षण च्या कामासाठी हवे आहे. मी सुशिक्षित/अशिक्षित आहे. अर्जा सोबत
          तलाठी/सरपंच/मंडळ अधिकारी/पोलिस पाटील यांचे प्रमाणपत्र जोडले आहे. अर्जा बरोबर आवश्यक असलेले कागदपत्रे व त्यांच्या
          छायांकित प्रतीसाक्षांकित दिल्या आहे. सोबत जोडलेल्या नातेवायकाचे जातीच्या प्रमाणपत्रातील व्यक्तीशी मुलगी नाते आहे. करिता स्वतःसाठी/मुलीसाठी/मुलासाठी{' '}
          <input type="text" className="text-center text-blue-500" /> या जातीचे सत्य प्रतिज्ञेवर लिहुन प्रमाणपत्र देण्याची कृपा करावी प्रतिज्ञापत्रा वरील सर्व मजकूर खरा आहे. मजकूर खोटा आढळून आल्यास भारतीय दंड विधान सहिता ( IPC ) कलम193(2),199 व 200 नुसार
          शिक्षेस पात्र राहील.
          </p>
        </div>
        <div className="border-2 border-black rounded-[10px] p-4 mb-24">
        <img 
            className="border w-40 h-40 ml-[40vw] "
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


          <h2 className="text-center font-semibold text-[15px]">शासन निर्णय क्रमांक :प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-18</h2>
          <h2 className="text-center font-semibold text-[15px] mb-2">स्वयंघोषणापत्र</h2>
          <p>
            मी. <input type="text"  className="text-center text-blue-500" value={name} onChange={(e) => setName(e.target.value)} /> श्री <input type="text"  className="text-center text-blue-500" /> याचा/यांची मुलगी/मुलगा/पत्नी वय <input type="text"  className="text-center text-blue-500" /> वर्ष,व्यवसाय{' '}
            <input type="text"  className="text-center text-blue-500" /> रा. <input type="text"  className="text-center text-blue-500" /> ता. <input type="text"  className="text-center text-blue-500" /> जि. <input type="text"  className="text-center text-blue-500" /> याद्वारे घोषितकरतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुतिनुसार खरी आहे. सदर माहिती खोटी आढळून आल्यास, भारतीय दंड सहिता अन्वेये आणि/किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे.
          </p>
          <p>
          ठिकाण:- <input type="text"  className="text-center text-blue-500" />  अर्जदाराची सही:-{' '}
            <input type="text"  className="text-center text-blue-500" /> <br />
            दि:- <input type="text"  className="text-center text-blue-500" />    अर्जदाराचे नाव:-{' '}
            <input type="text"  className="text-center text-blue-500" value={name} onChange={(e) => setName(e.target.value)} />
          </p>
        </div>

        <div>
          <div>
          <h2 className="text-center font-semibold text-[15px]">वंशावळी शपथपत्र</h2>
          <h2 className="text-center font-semibold text-[15px] mb-2">अर्जदाराच्या वडिलांच्या आजोबांचे पूर्ण नाव</h2>
          </div>
          <div>
            <label htmlFor="grandfatherName">वडिलांचे नाव:</label>
            <input
              type="text"
              className="text-center text-blue-500"
              id="grandfatherName"
              value={grandfatherName}
              onChange={(e) => setGrandfatherName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="fatherName">चुलत्याचे नाव:</label>
            <input
              type="text"
              className="text-center text-blue-500"
              id="fatherName"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="uncleName">वडिलांचे चुलत भाऊ:</label>
            <input
              type="text"
              className="text-center text-blue-500"
              id="uncleName"
              value={uncleName}
              onChange={(e) => setUncleName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="brotherName">वडिलांचे चुलत भाऊ:</label>
            <input
              type="text"
              className="text-center text-blue-500"
              id="brotherName"
              value={brotherName}
              onChange={(e) => setBrotherName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="applicantName">अर्जदाराचे नाव:</label>
            <input
              type="text"
              className="text-center text-blue-500"
              id="applicantName"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="applicantSiblingName">अर्जदाराच्या भावाचे नाव:</label>
            <input
              type="text"
              className="text-center text-blue-500"
              id="applicantSiblingName"
              value={applicantSiblingName}
              onChange={(e) => setApplicantSiblingName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="applicantUncleName">अर्जदाराच्या चूलत भावाचे नाव:</label>
            <input
              type="text"
              className="text-center text-blue-500"
              id="applicantUncleName"
              value={applicantUncleName}
              onChange={(e) => setApplicantUncleName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="applicantSisterName">अर्जदाराच्या चुलत बहिणीचे नाव:</label>
            <input
              type="text"
              className="text-center text-blue-500"
              id="applicantSisterName"
              value={applicantSisterName}
              onChange={(e) => setApplicantSisterName(e.target.value)}
            />
          </div>
          <p>स्वयंघोषणापत्रा वरील सर्व मजकूर खरा आहे .मजकूर खोटा आढळून आल्यास भारतीय दंड विधान सहिता ( IPC ) कलम 199 व 200 नुसार शिक्षेस पात्र राहील.</p>
        </div>


        <div className="border-2 border-black rounded-[10px] p-4 mb-80">
          <div>
          <img 
            className="border w-40 h-40 ml-[40vw] "
            // style={{
            //    backgroundImage: `url(${imageUrl})`,
            //    backgroundSize: 'cover',
            //    backgroundPosition: 'center',
            // }}
            src={`${imageUrl}`}
            id="camera"
            onClick={handleCameraClick}
          />
            <h2 className="text-center font-semibold text-[15px]"> शासन निर्णय क्रमांक :प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-अ</h2>
            <h2 className="text-center font-semibold text-[15px] mb-2"> प्रपत्र – अ</h2>
            <h2 className="text-center font-semibold text-[15px] mb-2">स्वयंघोषणापत्र</h2>
            <p>
              मी. <input type="text"  className="text-center text-blue-500" value={name} /> श्री <input type="text"  className="text-center text-blue-500" /> याचा/यांची मुलगी/मुलगा/पत्नी वय <input type="text"  className="text-center text-blue-500" /> वर्ष,व्यवसाय{' '}
              <input type="text"  className="text-center text-blue-500" /> रा. <input type="text"  className="text-center text-blue-500" /> ता. <input type="text"  className="text-center text-blue-500" /> जि. <input type="text"  className="text-center text-blue-500" /> याद्वारे घोषितकरतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुतिनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास , भारतीय दंड सहिता कलम 193(2),199 व 200 अन्वेये आणि/ किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे. 

            </p>
            <p>
              ठिकाण:- <input type="text"  className="text-center text-blue-500" />  अर्जदाराची सही:-{' '}
              <input type="text"  className="text-center text-blue-500" /> <br />
              दि:- <input type="text"  className="text-center text-blue-500" />    अर्जदाराचे नाव:-{' '}
              <input type="text"  className="text-center text-blue-500" value={name} />
            </p>
          </div>
        </div>


        <div>
        <h3 className=" text-[15px]  mt-20"> प्रती, </h3>
        <h3 className=" text-[15px] ">मा.उपविभागीय अधिकारी साहेब,</h3>
        <h4 className=" text-[15px] ">उपविभागीय कार्यालय, अंबड</h4>
        <h4  className=" text-[15px] font-semibold">विषय: अर्जदार यांची नमुना स्वाक्षरी स्वयंघोषणापत्र</h4>
        <p>
          अर्जदार: <input type="text" className="text-blue-500 text-center" value={name}  /> सत्य प्रतिज्ञेवर लिहून देतो/देते कि, मी वरील पत्यावर राहत आसून मी{' '}
          <input type="text" className="text-blue-500 text-center"  /> या जातीचा/जातीची आहे. स्वत:ला/माझा मुलगा/मुलगी यांना{' '}
          <input type="text" className="text-blue-500 text-center"  /> या जातीचे जात प्रमाणपत्र/नॉन-क्रिमीलेयर प्रमाणपत्र शैक्षणिक/सरकारी/नोकरीच्या कामासाठी हवे आहे. मी सुशिक्षित/अशिक्षित आहे करिता मी खालील माझी नमुना स्वाक्षरी करीत आहे.
        </p>
        <ol>
          <li>
            <span>1)</span>
            <input type="text" className="text-blue-500 text-center"  />
          </li>
          <li>
            <span>2)</span>
            <input type="text" className="text-blue-500 text-center"  />
          </li>
          <li>
            <span>3)</span>
            <input type="text" className="text-blue-500 text-center"  />
          </li>
          <li>
            <span>4)</span>
            <input type="text" className="text-blue-500 text-center"  />
          </li>
          <li>
            <span>5)</span>
            <input type="text" className="text-blue-500 text-center" />
          </li>
        </ol>
        <p>
          सक्षम <br />
          सेवा केंद्र चालकाचे नाव: <input type="text"  /> <br />
          सेवा केंद्र चालकाची स्वाक्षरी <input
            type="text"
            
          />
        </p>
        </div>


        <div className="border-2 border-black rounded-[10px] p-4">
          <div>
          <img 
            className="border w-40 h-40 ml-[40vw] "
            // style={{
            //    backgroundImage: `url(${imageUrl})`,
            //    backgroundSize: 'cover',
            //    backgroundPosition: 'center',
            // }}
            src={`${imageUrl}`}
            id="camera"
            onClick={handleCameraClick}
          />
            <h2 className="text-center font-semibold text-[15px]">   शासन निर्णय क्रमांक :प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-अ</h2>
            <h2 className="text-center font-semibold text-[15px] mb-2"> प्रपत्र – अ</h2>
            <h2 className="text-center font-semibold text-[15px] mb-2">स्वयंघोषणापत्र</h2>
            <p>
              मी. <input type="text"  className="text-center text-blue-500" value={name} /> श्री <input type="text"  className="text-center text-blue-500" /> याचा/यांची मुलगी/मुलगा/पत्नी वय <input type="text"  className="text-center text-blue-500" /> वर्ष,व्यवसाय{' '}
              <input type="text"  className="text-center text-blue-500" /> रा. <input type="text"  className="text-center text-blue-500" /> ता. <input type="text"  className="text-center text-blue-500" /> जि. <input type="text"  className="text-center text-blue-500" />  याद्वारे घोषितकरतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती वसमजुतिनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास , भारतीय दंड सहिता अन्वेये आणि/ किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे. 


            </p>
            <p>
              ठिकाण:- <input type="text"  className="text-center text-blue-500" />  अर्जदाराची सही:-{' '}
              <input type="text"  className="text-center text-blue-500" /> <br />
              दि:- <input type="text"  className="text-center text-blue-500" />    अर्जदाराचे नाव:-{' '}
              <input type="text"  className="text-center text-blue-500" value={name} />
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-center mt-20">शपथपत्र</h2>
          <p>
          मा. तहसिलदारसाहेब तथा कार्यकारी दंडाधिकारी, अंबड. यांच्या समोर <br />
          </p>
          <p>
          प्रती, <br />
          मा. उपविभागीय अधिकारी साहेब, <br />
          उपविभागीय कार्यालय अंबड. <br />
          अर्जदार : -<input type="text" className="text-center text-blue-500" value={name} />   <br /> 
          विषय :- स्वत अशिक्षित असल्याबाबत.<br />
          महोदय,<br /><br />
          वरील विषयी विनंती पूर्वक अर्ज करतो कि आपल्या कार्यालयात जात प्रमाणपत्र काढण्यासाठी मी अर्ज केला आहे त्या अनुषंगाने मी <input type="text" className="text-center text-blue-500" value={name} />  वय <input type="text" className="text-center text-blue-500" />    धंदा <input type="text" className="text-center text-blue-500" /> रा. <input type="text" className="text-center text-blue-500" />  ता. अंबड. जि जालना येथील रहिवाशी असून, वरील अनु शंगाने असे शपथपत्र लिहून देतो कि  मी कोणत्याही शाळेत प्रवेश घेतला नाही. म्हणून मी हे शपथपत्र लिहून देत आहे जे सत्य आहे शपथपत्रावरील सर्व मचकूर खरा आहे मचकूर खोटा आढळून आल्यास भारतीय दंड विधान सहिता (ips ) कलम १९९व २०० नुसार शिक्षेस पात्र राहील.

          </p>
        </div>

        <div className="border-2 border-black rounded-[10px] p-4 mt-40">
        <img 
            className="border w-40 h-40 ml-[40vw] e"
            // style={{
            //    backgroundImage: `url(${imageUrl})`,
            //    backgroundSize: 'cover',
            //    backgroundPosition: 'center',
            // }}
            src={`${imageUrl}`}
            id="camera"
            onClick={handleCameraClick}
          />
            <h2 className="text-center font-semibold text-[15px]">शासन निर्णय क्रमांक :प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-अ प्रपत्र–अ</h2>
            <h2 className="text-center font-semibold text-[15px] mb-2">स्वयंघोषणापत्र</h2>
            <p>
              मी. <input type="text"  className="text-center text-blue-500" value={name} /> श्री <input type="text"  className="text-center text-blue-500" /> याचा/यांची मुलगी/मुलगा/पत्नी वय <input type="text"  className="text-center text-blue-500" /> वर्ष,व्यवसाय{' '}
              <input type="text"  className="text-center text-blue-500" /> रा. <input type="text"  className="text-center text-blue-500" /> ता. <input type="text"  className="text-center text-blue-500" /> जि. <input type="text"  className="text-center text-blue-500" /> याद्वारे घोषितकरतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुतिनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास , भारतीय दंड सहिता अन्वेये आणि/ किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे. 


            </p>
            <p>
              ठिकाण:- <input type="text"  className="text-center text-blue-500" />  अर्जदाराची सही:-{' '}
              <input type="text"  className="text-center text-blue-500" /> <br />
              दि:- <input type="text"  className="text-center text-blue-500" />    अर्जदाराचे नाव:-{' '}
              <input type="text"  className="text-center text-blue-500" value={name} />
            </p>
        </div>

        <div>
          <h2 className="font-semibold text-center mt-20">शपथपत्र</h2>
          <p>
          मा. तहसिलदारसाहेब तथा कार्यकारी दंडाधिकारी, अंबड. यांच्या समोर <br />
          </p>
          <p>
          प्रती, <br />
          मा. उपविभागीय अधिकारी साहेब, <br />
          उपविभागीय कार्यालय अंबड. <br />
          अर्जदार : -<input type="text" className="text-center text-blue-500" value={name} />   <br /> 
          विषय :- वडील अशिक्षित असल्याबाबत व वडीलाचे  जात प्रमाणपत्र नसल्या बाबत .<br />
          महोदय,<br /><br />
          वरील विषयी विनंती पूर्वक अर्ज करतो कि आपल्या कार्यालयात जात प्रमाणपत्र काढण्यासाठी मी अर्ज केला आहे त्या अनुषंगाने मी <input type="text" className="text-center text-blue-500" value={name} />  वय <input type="text" className="text-center text-blue-500" />    धंदा <input type="text" className="text-center text-blue-500" /> रा. <input type="text" className="text-center text-blue-500" />  ता. अंबड. जि जालना येथील रहिवाशी असून, वरील अनु शंगाने असे शपथपत्र लिहून देतो कि  माझ्या वडिलांनी कोणत्याही शाळेत प्रवेश घेतला नाही व गरज न पडल्या मुळे वडिलांनी जात प्रमाणपत्र काढले नाही. म्हणून मी हे शपथपत्र लिहून देत आहे जे सत्य आहे शपथपत्रावरील सर्व मचकूर खरा आहे मचकूर खोटा आढळून आल्यास भारतीय दंड विधान सहिता (ips ) कलम १९९व २०० नुसार शिक्षेस पात्र राहील.


          </p>
        </div>


        <div className="mb-80">
          <h2 className="font-semibold text-center mt-20">शपथपत्र</h2>
          <p>
          मा. तहसिलदारसाहेब तथा कार्यकारी दंडाधिकारी, अंबड. यांच्या समोर <br />
          </p>
          <p>
          प्रती, <br />
          मा. उपविभागीय अधिकारी साहेब, <br />
          उपविभागीय कार्यालय अंबड. <br />
          अर्जदार : -  <input type="text" className="text-center text-blue-500" value={name} />   <br /> 
          विषय :- दोन्ही नावाची व्यक्ती एकच असल्याबाबत .<br />
          महोदय,<br /><br />
            मी 
            <input type="text" className="text-center text-blue-500" value={name} /> 
            वय 
            <input type="text" className="text-center text-blue-500" />
               वर्षे , धंदा 
               <input type="text" className="text-center text-blue-500" /> रा <input type="text" className="text-center text-blue-500" />  ता अंबड. जि. जालना येथील रहिवासी असून मी शपथपूर्वक लिहून देते कि माझे नाव 
            <input type="text" className="text-center text-blue-500" value={name} />
              असे नाव आहे .व माझे  नाव <input type="text" className="text-center text-blue-500" />  असे नाव आहे. या दोन्ही नावाची व्यक्ती एकच आहे व ति मिच आहे .  
            करिता वरील उपलब्ध पुराव्या आधारे दोन्ही नावाची व्यक्ती असल्या बाबत शपथपत्र लिहून देत आहे.
            करिता मी हे शपथपत्र लिहून दिले जे खरे व बरोबर आहे. ते खोटे आढळून आल्यास मी भारतीय दंड विधान सहिता (IPC) कलम १९२,१९९व २०० नुसार शिक्षेस पात्र राहील, याची मला जाणीव आहे.  



          </p>
        </div>

        <div>
        <h2 className="font-semibold text-center mt-20">(अर्जासोबत जोडावयाच्या शपथपत्राचा नमुना)</h2>
        <h5 className=" text-center">{`परिशिष्ट "क"`}</h5>
        <p>केंद्र शासनाच्या इतर मागास प्रवर्गात मोडणाऱ्या अर्जदाराने आरक्षणाचा फायदा मिळण्याकरीता व व प्रगत व्यक्ति / गट (क्रिमिलेअर) यामध्ये मोडत नसल्याबाबत सादर करावयाचे शपथपत्र</p>
        मी, श्री/श्रीमती/ कुमार /कुमारी 
        <input type="text"  className="text-center text-blue-500" value={name} />
         श्री <input type="text"  className="text-center text-blue-500" /> यांची मुलगा / मुलगी त्रय <input type="text"  className="text-center text-blue-500" />  वर्षे, व्यवसाय शिक्षण
        गाव/ शहर <input type="text"  className="text-center text-blue-500" />  तहसी अंबड जिल्हा जालना  राज्य महाराष्ट्र   येथील रहिवार असून याद्वारे दृढपुर्वक कथन करतो की, मी- <input type="text"  className="text-center text-blue-500" />  या 
        जातीचा / जमातीचा असून ही जात जमात केंद्र शासन, मिनिस्ट्री ऑफ पर्सोनेल, पब्लिक ग्रिव्हन्सेस अॅण्ड पेन्शन्स डिपार्टमेंट ऑफ 
        पर्सोनेल अॅण्ड ट्रेनिंग कडील कार्यालयीन ज्ञापन क्रमांक - ३६०१२/ २२/९३ - इएसटीटी (एस.सी.टी.) दिनांक ८ सप्टेंबर, १९९३ 
        अन्वये सुधारीत केल्याप्रमाणे तसेच केंद्र शासनाने या संदर्भात वेळोवेळी निर्गमित केलेल्या सूचने (Notification) नुसार शासन सेवेतील 
        आरक्षणाच्या फायद्याकरीता इतर मागासवर्ग प्रवर्गात गणल्या जाते.<br /><br />
        मी दृढपुर्वक असेही कथन करतो / करते की, केंद्र शासनाच्या क्रमांक - ३६०१२ / २२ / ९३ - इएसटीटी (एस.सी.टी., दिनांक ८ सप्टेंबर, १९९३ च्या कार्यालयीन ज्ञापनासोबतच्या परिशिष्टातील स्तंभ क्र. ३ मध्ये नमुद केलेल्या व कार्यालयीन ज्ञापन क्रमांक - ३६०३३ / ५ /२००४ - इएसटीटी (आर.ई.एस.) दिनांक १४ ऑक्टोबर, २००४, कार्यालयीन ज्ञापन क्रमांक - ३६०३३ / ३ / २००४ - इएसटीटी (आर.ई.एस.) दिनांक १४ ऑक्टोबर, २००८ अन्वये सुधारीत केल्याप्रमाणे तसेच केंद्र शासनाने या संदर्भात वेळोवेळी निर्गमित केलेल्या अद्ययावत परिपत्रक / सूचनेनुसार (Notification) शासन सेवेतील आरक्षणाच्या फायद्याकरीता मी इतर मागासवर्ग प्रवर्गातील उन्नत व प्रगत व्यक्ति/ गट (क्रिमिलेअर) यामध्ये मी मोडत नाही.<br /><br />
        मी दृढपुर्वक असेही कथन करतो / करते की, माझ्या आई किंवा वडीलांचा किंवा आई आणि वडील या दोघांचाही दर्जा / उत्पन्न हे ३१ मार्च २०२२ रोजी संपणान्या आर्थिक वर्ष अखेरीस वेळोवेळी विहीत केलेल्या अटी व शर्तीनुसार इतर मागासवर्ग प्रवर्गातील उन्नत व प्रगत व्यक्ति/ गट (क्रिमिलेअर) यांच्याकरीता असलेल्या मर्यादेमध्ये मोडते.<br />
        <p>
              ठिकाण:- <input type="text"  className="text-center text-blue-500" />  अर्जदाराची सही:-{' '}
              <input type="text"  className="text-center text-blue-500" /> <br />
              दि:- <input type="text"  className="text-center text-blue-500" />    अर्जदाराचे नाव:-{' '}
              <input type="text"  className="text-center text-blue-500" value={name} />
        </p>
        (उमेदवाराने स्वतः स्वाक्षरी न केलेले शपथपत्र / खुलासा रद्दबातल ठरविण्यात येईल.)
        (सूचना:- सदरहू आरक्षणाचा फायदा हा तात्पुरत्या स्वरुपाचा असून तो उमेदवाराने जात प्रमाणपत्र / उन्नत व प्रगत गट / व्यक्ति यामध्ये मांडत नसल्यासंदर्भात सादर केलेल्या कागदपत्रांच्या / पुराव्यांच्या पडताळणीसंदर्भात विहीत केलेल्या कार्यपध्दतीच्या अधिन राहिल. जर उमेदवाराने इतर मागसवर्ग प्रवर्गात मोडत असल्याबाबत किंवा उन्नत व प्रगत गट <br />
        भाति गोपन संबंधित<br /><br /><br /><br />

        </div>








        <div className="border-2 border-black rounded-[10px] p-4 mt-40">
          <div>
          <img 
            className="border w-40 h-40 ml-[40vw] "
            // style={{
            //    backgroundImage: `url(${imageUrl})`,
            //    backgroundSize: 'cover',
            //    backgroundPosition: 'center',
            // }}
            src={`${imageUrl}`}
            id="camera"
            onClick={handleCameraClick}
          />
            <h2 className="text-center font-semibold text-[15px]"> शासन निर्णय क्रमांक :प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-अ</h2>
            <h2 className="text-center font-semibold text-[15px] mb-2"> प्रपत्र – अ</h2>
            <h2 className="text-center font-semibold text-[15px] mb-2">स्वयंघोषणापत्र</h2>
            <p>
              मी. <input type="text"  className="text-center text-blue-500" value={name} /> श्री <input type="text"  className="text-center text-blue-500" /> याचा/यांची मुलगी/मुलगा/पत्नी वय <input type="text"  className="text-center text-blue-500" /> वर्ष,व्यवसाय{' '}
              <input type="text"  className="text-center text-blue-500" /> रा. <input type="text"  className="text-center text-blue-500" /> ता. <input type="text"  className="text-center text-blue-500" /> जि. <input type="text"  className="text-center text-blue-500" /> याद्वारे घोषितकरतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुति नुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास , भारतीय दंड सहिता अन्वेये आणि/ किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे. 

            </p>
            <p>
              ठिकाण:- <input type="text"  className="text-center text-blue-500" />  अर्जदाराची सही:-{' '}
              <input type="text"  className="text-center text-blue-500" /> <br />
              दि:- <input type="text"  className="text-center text-blue-500" />    अर्जदाराचे नाव:-{' '}
              <input type="text"  className="text-center text-blue-500" value={name} />
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

export default Form10