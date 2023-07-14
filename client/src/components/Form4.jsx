import {  useState } from 'react';
import {  useNavigate } from 'react-router-dom'
// import { UidContext } from './UidContext';


function Form4() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [relation1, setRelation1] = useState('');
  const [relation2, setRelation2] = useState('');
  const [relation3, setRelation3] = useState('');
//   const [relation4, setRelation4] = useState('');
  const [location, setLocation] = useState('');
  const [district, setDistrict] = useState('');
//   const {images} = useContext(UidContext)
  const [imageUrl, setImageUrl] = useState("");

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
    <div>
      <div  className="m-4 pt-0 p-4 overflow-x-hidden overflow-y-auto  text-[12px]">
         <div className="p-4">
            <h2 className="text-[15px] font-bold text-center">शपथपत्र</h2>
            <h2 className="text-[15px] font-semibold text-center">भूमिहीन प्रमाणपत्रा बाबत...</h2>
            <p className="max-w-[60vw] ml-[10vw]">         
            मी
            <input type="text" className="text-center text-blue-500" value={name} onChange={(e) => setName(e.target.value)} />
            वय
            <input type="text" className="text-center w-8 text-blue-500" value={age} onChange={(e) => setAge(e.target.value)} />
            धंदा
            <input type="text" className="text-center text-blue-500" value={relation1} onChange={(e) => setRelation1(e.target.value)} />
            रा.
            <input type="text" className="text-center text-blue-500" value={relation2} onChange={(e) => setRelation2(e.target.value)} />
            ता.
            <input type="text" className="text-center text-blue-500" value={relation3} onChange={(e) => setRelation3(e.target.value)} />
            जि.जालना येथील रहिवाशी असून शपथ पूर्वक लिहून देतो/देते की,मी भूमिहीन प्रमाणत्राची मागणी केलेली असून माझ्या कुंटूबात खालील प्रमाणे व्यक्ती आहेत.
            </p>

            <table className="ml-[10vw] mb-2">
            <thead>
               <tr>
                  <th className="border text-center">अ.क्र</th>
                  <th className="border text-center">व्यक्तीचे नावे</th>
                  <th className="border text-center">वय</th>
                  <th className="border text-center">नाते</th>
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
               </tr>
               <tr>
                  <td  className="border">4</td>
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

            <p className="max-w-[70vw] ml-[10vw]">
            तरी मौजे.
            <input type="text" className="text-center text-blue-500" value={location} onChange={(e) => setLocation(e.target.value)} />
            शिवारात माझ्या नावे जमीन नसून ता.
            <input type="text" className="text-center text-blue-500" value={district} onChange={(e) => setDistrict(e.target.value)} />
            जि. जालना तसेच महाराष्ट्रात इतत्र कोठेही माझ्या व माझ्या कुंटूबाच्या नावे जमीन नाही. आम्ही भूमिहीन आहोत. आमच्या कुटुंबातील सर्व सदस्याचे साल 2022-23 या वर्षाचे उत्पन्न एक लाखापेक्षा कमी आहे. या शिवाय अन्य कोणतेही उत्पन्न नाही. व उत्पन्नाचे साधन पुराव्या दाखल स्वघोषणा उत्पन्न प्रमाणपत्र सोबत जोडले आहे. सदरील भूमिहीन प्रमाणपत्र मला शैक्षणिक/शासकीय कामा करिता आवश्यकता असून भूमिहीन प्रमाणपत्र मिळणेबाबत विनंती केली आहे.
            </p>
         </div>

         <div className="px-2 py-1 border-2 border-black rounded-[10px] ">
            <h1 className="text-[15px] font-semibold ml-[20vw]">शासन निर्णय क्रमांक: प्रसुद्धा १६१४/३४५प्र.क्र ७१/१८/-अ</h1>
            <h3 className="text-[15px] font-semibold ml-[26vw]">प्रपत्र – अ</h3>
            <h3 className="text-[15px] font-semibold ml-[25vw] mt-[3vh]">स्वयंघोषणापत्र</h3>
            <img 
               className="border w-40 h-40 ml-[60vw] z-20"
               src={`${imageUrl}`}
               id="camera"
               onClick={handleCameraClick}
            />
            <input type="file" onChange={handleImage} id="fileInput" style={{ display: 'none' }} />
            <p className="ml-[10vw] max-w-[60vw] text-center w-[80vw]">
            मी 
            <input type="text" className="text-center text-blue-500" value={name} onChange={(e) => setName(e.target.value)} /> 
            श्री.
            <input type="text" className="text-center text-blue-500"  />
             यांचा/यांची मुलगी/मुलगा/पत्नी वय{' '}
            <input type="text" className="text-center text-blue-500 w-8" value={age} onChange={(e) => setAge(e.target.value)} /> 
            वर्ष, व्यवसाय{' '}
            <input type="text" className="text-center text-blue-500" value={relation1} onChange={(e) => setRelation1(e.target.value)}  /> 
            रा.
            <input type="text" className="text-center text-blue-500"  />
            ता.
            <input type="text" className="text-center text-blue-500"  />
            जि.जालना याद्वारे घोषित करतो/करते की, वरील सर्व माहिती माझ्या व्यक्तीगत माहिती व समजुतिनुसार खरी आहे. सदर माहिती खोटी आढळून आल्यास, भारतीय दंड सहिता कलम 193(2), 199 व 200 अन्वेये आणि/किंवा संबंधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी शिक्षेस पात्र राहीन याची मला पूर्ण जाणीव आहे.
            </p>


            <p className="ml-[10vw]">
            ठिकाण: <input type="text" className="text-center text-blue-500 mr-[10vw]"  /> अर्जदाराची सही{' '}
            <input type="text" className="text-center text-blue-500"  />
            </p>
            <p className="ml-[10vw]">
            दि: <input type="text" className="text-center text-blue-500 mr-[10vw]"  /> अर्जदाराचे नाव:-{' '}
            <input type="text" value={name} className="text-center text-blue-500"  />
            </p>
            <p className=" ml-[30vw]">मोबाईल नंबर: - +91<input type="number" className="text-center text-blue-500"  /></p>
            <p className="ml-[10vw] max-w-[60vw]">
               वरील सर्व माहिती माझ्या व्यक्तिगत माहिती व समजुती नुसार खरी आहे. तथापी भूमिहीन प्रमाणपत्र बाबत माहिती खोटी आढळून आल्यास भूमिहीन प्रमाणपत्र आधारे उचल करण्यात आलेल्या या योजनेच्या शासकीय रक्कमा शासनाकडे जमा करण्यास मी बाधील राहील. भारतीय दंड संहिता 1960 चे कलम 199 व 200 व अन्य संबधित कायद्यानुसार माझ्यावर खटला भरला जाईल व त्यानुसार मी दंडास/शिक्षेस पात्र राहील. याची मला पूर्णपणे जाणीव आहे. करिता हे शपथपत्र लिहून दिले ते खरे व बरोबर आहे.
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

export default Form4