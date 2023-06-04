import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

function SmallSlider() {
  
   return (
    <div className="h-[16vh] py-2">
      <Carousel className="min-w-[72vw] rounded-[10px]" interval={2000}>

        <Carousel.Item>
          <div className="flex flex-row justify-center items-center gap-4">
          <img
            className="d-block min-w-[21vw] rounded-[10px] h-[25vh]"
            src="src\assets\slider1.png"
            alt="First slide"
          />
          <img
            className="d-block min-w-[21vw] rounded-[10px] h-[25vh]"
            src="src\assets\slider2.png"
            alt="Second slide"
          />
          <img
            className="d-block min-w-[21vw] rounded-[10px] h-[25vh]"
            src="src\assets\slider3.png"
            alt="Second slide"
          />
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="flex flex-row justify-center items-center gap-4">
          <img
            className="d-block min-w-[21vw] rounded-[10px] h-[25vh]"
            src="src\assets\slider1.png"
            alt="First slide"
          />
          <img
            className="d-block min-w-[21vw] rounded-[10px] h-[25vh]"
            src="src\assets\slider2.png"
            alt="Second slide"
          />
          <img
            className="d-block min-w-[21vw] rounded-[10px] h-[25vh]"
            src="src\assets\slider3.png"
            alt="Second slide"
          />
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="flex flex-row justify-center items-center gap-4">
          <img
            className="d-block min-w-[21vw] rounded-[10px] h-[25vh]"
            src="src\assets\slider1.png"
            alt="First slide"
          />
          <img
            className="d-block min-w-[21vw] rounded-[10px] h-[25vh]"
            src="src\assets\slider2.png"
            alt="Second slide"
          />
          <img
            className="d-block min-w-[21vw] rounded-[10px] h-[25vh]"
            src="src\assets\slider3.png"
            alt="Second slide"
          />
          </div>
        </Carousel.Item>
        
        
        
        
      </Carousel>
      
    </div>
   )

}

export default SmallSlider