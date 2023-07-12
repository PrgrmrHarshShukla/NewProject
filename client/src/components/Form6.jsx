import { useState } from 'react';
import {  useNavigate } from 'react-router-dom'
// import { UidContext } from './UidContext'
// import { useContext } from 'react'


function Form6() {
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

      <div className="m-4 pt-0 p-4 overflow-x-hidden overflow-y-auto text-[12px]">
         <div>
         <h5 className="text-center font-bold my-2">शपथपत्र</h5>
         प्रती,<br />
         मा. तहसीलदार साहेब,<br />
         तहसील कार्यालय अंबड, <br />
         ता. अंबड जि. जालना <br />

         <p className="font-semibold my-2">विषय :  अल्पभूधारक प्रमाणपत्र मिळणे बाबत...</p>

         मी 
         <input type="text" className="text-center text-blue-500" />
          वय 
         <input type="text" className="text-center text-blue-500" />
           वर्ष  धंदा  
         <input type="text" className="text-center text-blue-500" />
          रा.  
         <input type="text" className="text-center text-blue-500" />
          ता. 
         <input type="text" className="text-center text-blue-500" />
          जि. 
         <input type="text" className="text-center text-blue-500" />
         येथील रहिवाशी असून शपथपूर्वक प्रतिज्ञापत्र सादर करतो की , माझ्या नावे स्वत: मालकी व ताब्यातील शेत जमीन मौजे  
         <input type="text" className="text-center text-blue-500" />
          ता. 
         <input type="text" className="text-center text-blue-500" />
          जि. 
         <input type="text" className="text-center text-blue-500" />
          येथील शेत जमीन गट नंबर 
         <input type="text" className="text-center text-blue-500" />
         एकूण क्षेत्र 
         <input type="text" className="text-center text-blue-500" />
         गुंठे / हेक्टर एवढी शेतजमीन स्वत: मालकी व ताब्यातील असून तलाठी सजा 
         <input type="text" className="text-center text-blue-500" />
         अंतर्गत मला इतर ठिकाणी कोठेही जमीन नाही .  <br /> <br />

         तसेच माझ्या कुटुंबाचे एकून वार्षिक उत्पन्न 
         <input type="text" className="text-center text-blue-500" />
         रुपये असून सदर  अल्पभूधारक प्रमाणपत्र मला मुला/मुलींच्या शैक्षणिक कामासाठी/शासकीय कामासाठी / वैद्यकीय कामासाठी अत्यंतगरजेचे आहे. <br />
         करिता शपथपत्र सादर करीत आहे जे खरे व बरोबर आहे. खोटे आढळून आल्यास मी भा. द.वी.कायदा १९९ व  २०० , १९३ (२) अन्वये शिक्षेस पात्र राहील ,याची मला जाणीव आहे. <br  />

         </div>

         <div className="border-2 border-black p-4 rounded-[10px] mt-4">
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

            <h5 className=" text-center text-[15px]">शासन निर्णय क्रमांक :प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-अ प्रपत्र–अ</h5>
            <h5 className="mb-4 text-center text-[15px] font-semibold">स्वयंघोषणापत्र</h5>

            मी <input type="text" className="text-center text-blue-500" />  श्री <input type="text" className="text-center text-blue-500" />  यांचा/यांची मुलगी/मुलगा/पत्नी वय <input type="text" className="text-center text-blue-500" />  वर्ष, व्यवसाय <input type="text" className="text-center text-blue-500" /> रा <input type="text" className="text-center text-blue-500" /> ता. <input type="text" className="text-center text-blue-500" /> जि.जालना याद्वारे घोषितकरतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुतिनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास , भारतीय दंड सहिता कलम 193(2),199 व 200 अन्वेये आणि/किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे. 

            <p className="ml-[10vw]">
               ठिकाण: <input type="text" className="text-center text-blue-500 mr-[10vw]"  /> अर्जदाराची सही{' '}
               <input type="text" className="text-center text-blue-500"  />
               </p>
               <p className="ml-[10vw]">
               दि: <input type="text" className="text-center text-blue-500 mr-[10vw]"  /> अर्जदाराचे नाव:-{' '}
               <input type="text" className="text-center text-blue-500"  />
            </p>
         </div>

         <div className="mt-20">
            <h6  className=" text-center text-[15px]">अल्पभूधारक प्रमाणपत्र मिळणे बाबत...</h6>
            <h6  className=" text-center text-[15px] font-semibold">स्वयंघोषणापत्र</h6>
            मी श्री/श्रीमती नवनाथ <input type="text" className="text-center text-blue-500" />  वय <input type="text" className="text-center text-blue-500" />  वर्षे  धंदा  <input type="text" className="text-center text-blue-500" />  रा. <input type="text" className="text-center text-blue-500" />  ता. <input type="text" className="text-center text-blue-500" /> जि. जालना येथील रहिवाशी असून  स्वयंघोषणापत्र लिहून देतो/देते की, वरील ठिकाणचा / ठिकाणची रहिवाशी आहे. मला तहसील कार्यालय अंबड येथून अल्पभूधारक प्रमाणपत्र काढायचे आहे . करिता मी अल्पभूधारक प्रमाणपत्र मिळणे बाबत स्वयंघोषणापत्र लिहून देत आहे .तरी माझ्या कुटुंबात खालीलप्रमाणे व्यक्ती आहेत.


            <table className="mt-4 mb-2">
                  <thead>
                     <tr>
                        <th className="border text-center">अ.क्र</th>
                        <th className="border text-center">व्यक्तीचे नावे</th>
                        <th className="border text-center">वय</th>
                        <th className="border text-center">नाते</th>
                        <th className="border text-center">व्यवसाय</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td  className="border">1</td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500 w-[40vw]"  />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500"  />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500" />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500" />
                        </td>
                     </tr>
                     <tr>
                        <td  className="border">2</td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500 w-[40vw]" />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500" />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500" />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500" />
                        </td>
                     </tr>
                     <tr>
                        <td  className="border">3</td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500 w-[40vw]"  />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500" />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500"  />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500"  />
                        </td>
                     </tr>
                     <tr>
                        <td  className="border">4</td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500 w-[40vw]"  />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500"  />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500"  />
                        </td>
                        <td  className="border">
                        <input type="text" className="text-center text-blue-500"  />
                        </td>
                     </tr>
                  </tbody>
            </table>

            तरी वरील सर्व सदस्य माझ्या कुटुंबातील असून त्यांच्या नावे कोठेही शेत नाही . <br />
            करीता वरील स्वयंघोषणापत्र लिहून देत आहे . जे की खरे व अचूक आहे.वरील सर्व माहिती खरी असून खोटी अथवा चुकीची आढळून आल्यास मी भ.द.वी. कलम १९९ ,२०० व १९३(२) नुसार शिक्षेस व दंडास पात्र राहील. 

         </div>

         <div className="border-2 border-black p-4 rounded-[10px] mt-4">
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

            <h5 className=" text-center text-[15px]">शासन निर्णय क्रमांक :प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-अ प्रपत्र–अ</h5>
            <h5 className="mb-4 text-center text-[15px] font-semibold">स्वयंघोषणापत्र</h5>

            मी <input type="text" className="text-center text-blue-500" />  श्री <input type="text" className="text-center text-blue-500" />  यांचा/यांची मुलगी/मुलगा/पत्नी वय <input type="text" className="text-center text-blue-500" />  वर्ष, व्यवसाय <input type="text" className="text-center text-blue-500" /> रा <input type="text" className="text-center text-blue-500" /> ता. <input type="text" className="text-center text-blue-500" /> जि.जालना याद्वारे घोषितकरतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुतिनुसार खरी आहे.सदर माहिती खोटी आढळून आल्यास , भारतीय दंड सहिता कलम 193(2),199 व 200 अन्वेये आणि/किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे. 

            <p className="ml-[10vw]">
               ठिकाण: <input type="text" className="text-center text-blue-500 mr-[10vw]"  /> अर्जदाराची सही{' '}
               <input type="text" className="text-center text-blue-500"  />
               </p>
               <p className="ml-[10vw]">
               दि: <input type="text" className="text-center text-blue-500 mr-[10vw]"  /> अर्जदाराचे नाव:-{' '}
               <input type="text" className="text-center text-blue-500"  />
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

export default Form6