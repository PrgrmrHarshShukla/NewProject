import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

import SmallSlider from "./SmallSlider"

function Slider() {
   return (
    <div className="mt-12 w-[95%] text-black flex flex-col justify-start items-center rounded-[10px]">
      <Carousel className="w-[95%] min-w-[75vw] rounded-[10px]" interval={6000}>
        <Carousel.Item>
          <img
            className="d-block w-[75vw] min-w-[75vw] h-[45vh]  rounded-[10px]"
            src="src\assets\slider1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-[60vw] min-w-[55vw] h-[45vh] ml-[8vw]  rounded-[10px]"
            src="src\assets\slider2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-[75vw] min-w-[75vw] h-[45vh]  rounded-[10px]"
            src="src\assets\slider3.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <SmallSlider />
    </div>
   )

}

export default Slider