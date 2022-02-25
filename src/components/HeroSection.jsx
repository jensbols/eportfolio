import face from '../images/samplefaceshot.jpg';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-blue-100 p-32 text-center">
      <h1 className='text-5xl font-bold text-blue-700 mb-2'>Hi i'm Jens</h1>
      <p className='text-gray-700 text-lg mb-12'>I'm a computer science student located in Gent, Belgium</p>

      <div>
        <a href="#">My projects</a>
        <a href="#">Contact</a>
      </div>

    </div>
  )
}