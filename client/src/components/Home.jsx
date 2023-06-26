import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import { UidContext } from './UidContext';
import { useContext } from 'react';


import Login from './Login'
import Contact from './Contact'



function Home() {

  const { images } = useContext(UidContext)
  
   return (
      <div className="w-[80vw] ml-[20vw] sm:ml-[20vw] gap-32 flex flex-col items-center ">
        <Carousel className="w-[95%] min-w-[75vw] rounded-[10px] ml-[20vw] sm:ml-0" interval={6000}>
          <Carousel.Item>
            <img
              className="w-[100%] sm:w-[75vw] min-w-[75vw] h-[45vh]  rounded-[10px]"
              src={images[2]}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-[100%] sm:w-[75vw] min-w-[75vw] h-[45vh]  rounded-[10px]"
              src={images[4]}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="ml-[20vw] w-[80vw] sm:ml-[0]  sm:w-[35vw]">
          <Login />
          <Contact />
        </div>

      </div>
   )

}


export default Home