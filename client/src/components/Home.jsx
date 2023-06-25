import Slider from './Slider'
import Login from './Login'
import Contact from './Contact'

function Home() {
   return (
      <div className="w-[80vw] ml-[20vw] gap-32 flex flex-col justify-start items-center ">
        <Slider />

        <div className="w-[60vw]">
          <Login />
          <Contact />
        </div>

      </div>
   )

}


export default Home