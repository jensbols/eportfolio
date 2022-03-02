import bgimage from '../images/bgimage.png'
import face from '../images/samplefaceshot.jpg'
import backGroundHero from '../images/circle-scatter-haikei.svg';
export default function HeroSection() {
  return (
    <>
    <div className='bg-gray-900'>

      <div className="overflow-hidden max-w-7xl mx-auto">
      {/* left */}
        <div className="float-left w-3/6 py-5 px-10 text-left items-center mt-20">
          <h2 className='text-xl font-bold mb-2 bg-clip-text ml-1 text-blue-500'>Hi, my name is</h2>
          <h1 className='text-white text-7xl font-bold pb-3'>Jens Bols.</h1>
          <h2 className='text-4xl font-bold mb-5 text-gray-100'>I build applications for the web.</h2>
          <p className='text-gray-400 text-lg mb-8'>I'm a computer science student located in Gent, Belgium. <br /> I aspire to become a full stack webdeveloper</p>

          <div className="space-x-2">
            <a href="#" className="py-3 px-8 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 hover:shadow-xl hover:text-gray-900 transition duration-300">My projects</a>
            <a href="#" className="py-3 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-400 hover:shadow-xl transition duration-300">Contact</a>
          </div>
        </div>

      {/* right */}
        <div className='float-right w-2/5 py-20 pl-16 items-center mt-7 mr-7'>
          <img src={face} alt="face" className='rounded-md border-r-8 border-b-8 border-blue-500'></img>
        </div>
      </div>
    </div>
    </>
  )
}