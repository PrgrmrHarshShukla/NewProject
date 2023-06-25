import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';


import './App.css'

import Header from './Header'
import Home from './Home';
import Services from './Services';
import About from './About';
import Profile from './Profile';
import ContactPage from './ContactPage';
import Registration from './Registration';

import { UidContext } from './UidContext';
import Empty from './Empty';
import Form from './Form';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import FormIntro from './FormIntro';


function App() {
  const [uid, setUid] = useState("")
  const [images, setImages] = useState([])

  
  const storage = getStorage()

  useEffect(() => {
    const getImages = async () => {

      const url1 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/form.png"))
  
  
      const url2 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/jantasuvidha-logo-removebg.png"))
  
  
      const url3 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/slider1.png"))
  
  
      const url4 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/slider2.png"))
  
  
      const url5 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/slider3.png"))
  
  
      const url6 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/text.png"))
    
  
      const url8 = await getDownloadURL(ref(storage, "gs://janta-suvidha.appspot.com/topRightIcon.png"))
  
      setImages([url1, url2, url3, url4, url5, url6, url8])
  
      // console.log(images);
    }
  
    getImages()  
  }, [images, storage])

  return (
    <div className="flex flex-row w-screen justify-between items-start">
      <Router>
        <UidContext.Provider value={{ uid, setUid, images }}>
          <Routes>
              <Route exact path="/" element = {[<Header />, <Home />]} />
              {uid ?
                <Route exact path="/profile" element = {[<Header />, <Profile />]} /> :
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
