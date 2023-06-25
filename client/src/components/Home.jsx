import Slider from './Slider'
import Login from './Login'
import Contact from './Contact'

function Home() {
   return (
      <div className="w-[80vw] ml-[20vw] sm:ml-[20vw] gap-32 flex flex-col items-center ">
        <Slider />

        <div className="ml-[20vw] w-[80vw] sm:ml-[0]  sm:w-[35vw]">
          <Login />
          <Contact />
        </div>

      </div>
   )

}


export default Home