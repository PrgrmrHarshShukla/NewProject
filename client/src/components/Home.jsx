import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Carousel } from "react-bootstrap";
import { UidContext } from './UidContext';
import { useContext } from 'react';
import { Link } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";

import topRightIcon from "./topRightIcon.png"
import logo from "./logo.png"
import slider1 from "./slider1.png"
import slider3 from "./slider3.png"


import Login from './Login'
import Contact from './Contact'



function Home() {

  const { uid, setUid } = useContext(UidContext)
  const auth = getAuth()

  const handleClick = async (e) => {
     e.preventDefault()
     if(uid) {
        try {
           await signOut(auth)
           alert("You have successfully logged out of Janta Suvidha.\nThank You.")
           setUid("")
        }
        catch(err) {
           console.error(err, " in logging out");
           alert(err, " in logging out");
        }
     }
     else {
        alert("You are already logged out!")
     }
  }
  
   return (

    <div  className="w-[100vw] h-auto sm:h-[100vh]">


      <div className="flex flex-col justify-between items-center w-[100vw] gap-4 h-[30vh]">

        <div className="z-20 w-[100vw] h-[10vh] max-h-[10vh] flex flex-row justify-between pl-[7vw] -pr-[2vw] sm:px-0 md:ml-8">
          <img src={logo} className="w-[20vw] h-[15vh]" />  
          <img src={topRightIcon} className="w-[60vw] sm:w-[40vw] h-[15vh]" />  
        </div>


        <ul className="z-0 mx-[1vw] flex flex-row justify-evenly gap-[8vw] sm:gap-0 items-center w-[100vw] h-[10vh] pr-[0vw] sm:pr-[5vw] md:pr-[2vw] bg-green-300 text-[1.3rem] overflow-x-hidden border rounded-[10px]">

            <li title="Home" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/">
                  <i className="fas fa-home hover:text-orange-500 mb-3"></i>
                  <p className="hover:text-orange-500 hidden md:block">Home</p>
                </Link>
            </li>
            <li title="Profile" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/profile">
                  <i className="fas fa-user hover:text-orange-500 mb-3"></i>
                  <p className="hover:text-orange-500 hidden md:block">My Profile</p>
                </Link>
            </li>
            <li title="Widgets" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/formIntro">
                  <i className="fas fa-file-alt hover:text-orange-500 mb-3"></i>
                  <p className="hover:text-orange-500 hidden md:block">Widgets</p>
                </Link>
            </li>
            <li title="Services" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/services">
                  <i className="fas fa-briefcase hover:text-orange-500 mb-3"></i>
                  <p className="hover:text-orange-500 hidden md:block">Services</p>
                </Link>
            </li>
            <li title="Registration" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/registration">
                  <i className="fas fa-user-plus hover:text-orange-500 mb-3"></i>
                  <p className="hover:text-orange-500 hidden md:block">Registration</p>
                </Link>
            </li>
            <li title="Contact" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                <Link className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12" to="/contact">
                  <i className="fas fa-globe hover:text-orange-500 mb-3"></i>
                  <p className="hover:text-orange-500 hidden md:block">Contact</p>
                </Link>
            </li>
            <li title="Logout" className="h-[100%] w-[100%] flex flex-col justify-center items-start font-semibold text-black">
                  <button 
                  onClick={handleClick}
                      className="text-black no-underline flex flex-row justify-start items-center gap-20 sm:gap-3 -ml-4 sm:ml-12 hover:cursor-pointer"
                  >
                      <i className="fas fa-sign-out-alt hover:text-orange-500 mb-3"></i>
                      <p className="hover:text-orange-500 hidden md:block">Logout</p>
                  </button>
            </li>
            
          </ul>

      </div>

      <div className="w-[100vw] mt-[12vh]  flex flex-col md:flex-row gap-[5vh] sm:gap-[2vw] items-center justify-center md:items-start">
        <Carousel className="w-[95vw] sm:w-[75vw] rounded-[10px]" interval={6000}>
          <Carousel.Item>
            <img
              className="w-[95vw] min-w-[75vw] h-[45vh]  rounded-[10px]"
              src={slider1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="">
            <img
              className="w-[95vw] min-w-[75vw] h-[45vh]  rounded-[10px]"
              src={slider3}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="-ml-[50vw] sm:ml-0 w-[20vw]">
          <Login />
          <Contact />
        </div>

      </div>
    </div>
   )

}


export default Home