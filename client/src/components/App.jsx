import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


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


function App() {
  const [uid, setUid] = useState("")
  

  return (
    <div className="flex flex-row w-screen justify-between items-start">
      <Router>
        <UidContext.Provider value={{ uid, setUid }}>
          <Routes>
              <Route exact path="/" element = {[<Header />, <Home />]} />
              {uid ?
                <Route exact path="/profile" element = {[<Header />, <Profile />]} /> :
                <Route exact path="/profile" element = {[<Header />, <Empty />]} />
              }
              <Route exact path="/services" element = {[<Header />, <Services />]} />
              <Route exact path="/registration" element = {[<Header />, <Registration />]} />
              <Route exact path="/contact" element = {[<Header />, <ContactPage />]} />
              <Route exact path="/form" element = {<Form />} /> 
              {/* {uid ?
                <Route exact path="/form" element = {<Form />} /> :
                <Route exact path="/form" element = {[<Header />, <Empty />]} />
              } */}

          </Routes>
        </UidContext.Provider>
      </Router>
    </div>
  )
}

export default App
