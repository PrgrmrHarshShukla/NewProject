import Slider from './Slider'
import Login from './Login'
import Contact from './Contact'

function Home() {
   return (
      <div className="w-screen md:gap-16 gap-24 flex flex-row  flex-wrap ">
        <Slider />

        <div className="w-[90vw] md:w-1/3">
          <Login />
          <Contact />
        </div>

      </div>
   )

}


export default Home