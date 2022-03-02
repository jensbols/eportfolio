import aboutMeSvg from '../images/goal-svgrepo-com.svg';

export default function AboutMe() {
  return (
    <>
      <div className='max-w-full bg-gray-900'>
        <div className="max-w-7xl mx-auto flex pt-6 pb-20 px-32 bg-transparent">
          {/* right */}

          {/* left */}
          <div className="text-center mt-10 ml-10">
            <h3 className='text-3xl font-bold text-center pt-3 border-b-4 border-blue-500 pb-3 text-gray-200'>About me</h3>
            <p className='mt-6 pb-6 border-b-4 border-blue-500 text-gray-400'>I always had a hard time figuring out what I wanted to become in life, It wasn't until I enrolled in a computer course at my local highschool in Oostende that I found something that sparked my interest.
              Further down the line in my college degree I found a passion for web development, not only front-end but also back-end. I also really like working with react and javascript based librarys and I hope to develop myself further in this branch.</p>
          </div>

        </div>
      </div>
    </>
  )
}