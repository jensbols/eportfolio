import bgimage from '../images/bgyello.jpg'
export default function HeroSection() {
  return (
    <div style={{ backgroundImage: `url(${bgimage})` }} className="min-h-screen bg-blue-100 p-32 text-center px-96"> 
      <h1 className='text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-gray-300'>Hi i'm Jens</h1>
      <p className='text-gray-700 text-lg mb-8'>I'm a computer science student located in Gent, Belgium</p>

      <div className="space-x-2">
        <a href="#" className="py-3 px-8 bg-gray-400 text-gray-800 rounded-lg hover:bg-gray-300 hover:shadow-xl hover:text-gray-900 transition duration-300">My projects</a>
        <a href="#" className="py-3 px-8 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-300 hover:shadow-xl transition duration-300">Contact</a>
      </div>

    </div>
  )
}