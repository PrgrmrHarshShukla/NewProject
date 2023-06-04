import '@fortawesome/fontawesome-free/css/all.css';


function Services() {
   return (
      <div className="w-[80vw] ml-[20vw] justify-center h-screen flex flex-col  items-center">
         <div className="flex flex-row gap-2 justify-start border-b-2 border-gray-400 mb-12 w-[62vw] mt-[5vh]">
            <h2 className="text-orange-500">
               <i className="fas fa-briefcase"></i>
            </h2>
            <h2 className="text-orange-500 font-semibold">आमच्या सुविधा</h2>
         </div>

         <div className="w-[70vw] h-[73vh] flex flex-col  items-center gap-2">
            
          
            
          
            <div className="flex flex-col flex-wrap gap-4 justify-center items-center">
              
               <img
                  className="d-block w-[55vw] min-w-[100px] h-[35vh]"
                  src="src\assets\slider2.png"
                  alt="First slide"
               />
               <div className="flex flex-row flex-wrap gap-4">
                  <img
                     className="d-block w-[32vw] min-w-[100px] h-[35vh] hover:border-4 rounded-[10px] hover:border-red-500"
                     src="src\assets\slider3.png"
                     alt="First slide"
                  />
                  <img
                     className="d-block w-[32vw] min-w-[100px] h-[35vh] hover:border-4 rounded-[10px] hover:border-red-500"
                     src="src\assets\slider1.png"
                     alt="Second slide"
                  />
               </div>
            </div>
          
           
          
         </div>
      </div>
   )
}

export default Services