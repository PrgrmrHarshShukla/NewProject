import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css'

import Header from './Header'
import Home from './Home';
// import Footer from './Footer'
import Services from './Services';
import About from './About';
import Profile from './Profile';
import ContactPage from './ContactPage';
import Registration from './Registration';


function App() {
  

  return (
    <div className="flex flex-row w-screen justify-between items-start">
      <Router>
        <Routes>
            <Route exact path="/" element = {[<Header />, <Home />]} />
            <Route exact path="/profile" element = {[<Header />, <Profile />]} />
            <Route exact path="/services" element = {[<Header />, <Services />]} />
            <Route exact path="/registration" element = {[<Header />, <Registration />]} />
            <Route exact path="/contact" element = {[<Header />, <ContactPage />]} /> 
            <Route exact path="/about" element = {[<Header />, <About />]} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
