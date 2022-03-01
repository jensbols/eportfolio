import github from '../images/GitHub-Logo.png';

export default function ProjectSection() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex pt-16 pb-20">
        {/* left */}
        <div className="w-2/3 ">
          <h3 className='text-3xl font-bold text-left px-16'>My Projects</h3>
          <p className='mt-6 px-16'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <div className='flex'>
            <h3 className='text-3xl mt-6 px-16'>Click github icon to view my repository</h3><svg xmlns="http://www.w3.org/2000/svg" class="mt-3 h-16 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        {/* right */}
        <div className="w-1/3">
          <a href="https://github.com/jensbols" target="_blank" rel="noreferrer"><img src={github}></img></a>
        </div>
      </div>
    </>
  )
}