import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UidContext } from './UidContext';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';


import './App.css'

import Header from './Header'
import Home from './Home';
import Services from './Services';
// import About from './About';
import Profile from './Profile';
import ContactPage from './ContactPage';
import Registration from './Registration';
import Empty from './Empty';
import Form from './Form';
import FormIntro from './FormIntro';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';
import Form7 from './Form7';
import Form8 from './Form8';




function App() {
  const [uid, setUid] = useState("")
  const [images, setImages] = useState([])
  const storage = getStorage()

  useEffect(() => {
    const getImages = async () => {

      const url1 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/form.png"))
  
  
      const url2 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/jantasuvidha-logo-removebg.png"))
  
  
      const url3 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/Screenshot (151).png"))
  
  
      const url4 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/slider2.png"))
  
  
      const url5 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/slider3.png"))
  
  
      const url6 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/text.png"))
    
  
      const url8 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/topRightIcon.png"))

      // const urlUser = await getDownloadURL(ref(storage, `gs://janta-suvidha.appspot.com/${uid}: userPhoto`)) 
         

    
  
      setImages([url1, url2, url3, url4, url5, url6, url8])
  
      // console.log(images);
    }
  
    getImages()  
  }, [uid])




  return (
    <div className=" flex flex-row w-screen justify-between items-start">
      <Router>
        <UidContext.Provider value={{ uid, setUid, images, setImages }}>
          <Routes>
              <Route exact path="/" element = {<Home />} />
              {uid ?
                <Route exact path="/profile" element = {[<Header />, <Profile />]} /> 
                :
                <Route exact path="/profile" element = {[<Header />, <Empty />]} />
              }
              {uid ?
                <Route exact path="/services" element = {[<Header />, <Services />]} /> 
                :
                <Route exact path="/services" element = {[<Header />, <Empty />]} />
              }
              <Route exact path="/contact" element = {[<Header />, <ContactPage />]} />              
              <Route exact path="/registration" element = {[<Header />, <Registration />]} />
              
              <Route exact path="/form" element = {<Form />} /> 
              <Route exact path="/form2" element = {<Form2 />} /> 
              <Route exact path="/form3" element = {<Form3 />} /> 
              <Route exact path="/form4" element = {<Form4 />} /> 
              <Route exact path="/form5" element = {<Form5 />} /> 
              <Route exact path="/form6" element = {<Form6 />} /> 
              <Route exact path="/form7" element = {<Form7 />} /> 
              <Route exact path="/form8" element = {<Form8 />} /> 
              {uid ?
                <Route exact path="/formIntro" element = {[<Header />, <FormIntro />]} /> :
                <Route exact path="/formIntro" element = {[<Header />, <Empty />]} />
              }

          </Routes>
        </UidContext.Provider>
      </Router>
    </div>
  )
}

export default App
