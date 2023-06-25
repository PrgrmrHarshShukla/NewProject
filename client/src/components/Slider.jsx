import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

import { UidContext } from './UidContext';
import { useContext } from 'react';

// import SmallSlider from "./SmallSlider"

function Slider() {

  const { images } = useContext(UidContext)

   return (
    <div className="mt-12 w-[80vw] text-black flex flex-col justify-start items-center rounded-[10px]">
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
            className="w-[100%] sm:w-[75vw] min-w-[55vw] h-[45vh] ml-[0vw]  rounded-[10px]"
            src={images[3]}
            alt="Second slide"
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
      {/* <SmallSlider /> */}
    </div>
   )

}

export default Slider