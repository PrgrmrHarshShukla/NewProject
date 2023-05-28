import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

import SmallSlider from "./SmallSlider"

function Slider() {
   return (
    <div className="md:w-3/5 w-[95vw] pl-[2vw] text-black">
      <Carousel className="md:w-[60vw] w-[97vw] min-w-[60vw]" interval={6000}>
        <Carousel.Item>
          <img
            className="d-block w-[60vw] min-w-[600px] h-[45vh]"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-[60vw] min-w-[600px] h-[45vh]"
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-[60vw] min-w-[600px] h-[45vh]"
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