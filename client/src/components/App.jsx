import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css'

import Header from './Header'
import Home from './Home';
import Footer from './Footer'
import Services from './Services';
import About from './About';
import ContactPage from './ContactPage';
import Registration from './Registration';


function App() {
  

  return (
    <div className="flex flex-col w-screen justify-center">
      <Router>
        <Routes>
            <Route exact path="/" element = {[<Header />, <Home />, <Footer />]} />
             <Route exact path="/services" element = {[<Header />, <Services />, <Footer />]} />
            <Route exact path="/registration" element = {[<Header />, <Registration />, <Footer />]} />
            <Route exact path="/contact" element = {[<Header />, <ContactPage />, <Footer />]} /> 
            <Route exact path="/about" element = {[<Header />, <About />, <Footer />]} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
