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
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-[75vw] min-w-[75vw] h-[45vh]  rounded-[10px]"
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-[75vw] min-w-[75vw] h-[45vh]  rounded-[10px]"
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <SmallSlider />
    </div>
   )

}

export default Slider