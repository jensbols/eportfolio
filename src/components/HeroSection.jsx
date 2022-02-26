import bgimage from '../images/bgimage.png'
import face from '../images/samplefaceshot.jpg'
export default function HeroSection() {
  return (
    <>
      <div style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }} className="overflow-hidden max-w-7xl mx-auto">
      {/* left */}
        <div className="float-left w-1/2 py-20 text-center items-center mt-20">
          <h1 className='text-5xl font-bold mb-2 bg-clip-text text-green-600'>Hi i'm Jens</h1>
          <p className='text-gray-700 text-lg mb-8'>I'm a computer science student located in Gent, Belgium</p>

          <div className="space-x-2">
            <a href="#" className="py-3 px-8 bg-gray-400 text-gray-800 rounded-lg hover:bg-gray-300 hover:shadow-xl hover:text-gray-900 transition duration-300">My projects</a>
            <a href="#" className="py-3 px-8 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-300 hover:shadow-xl transition duration-300">Contact</a>
          </div>
        </div>

      {/* right */}
        <div className='float-right w-1/2 py-20 px-5 items-center'>
          <img src={face} alt="face" className='rounded-xl'></img>
        </div>
      </div>
    </>
  )
}