import React, {useState} from "react"

export default function NavBar() {
  const [showMobileMenu, setShowMenu] = useState(false);
  return (
    <>
    {/*nav bar */}
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between">
          <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-gray-700 font-bold hover:text-gray-900">Home</a>
              </div>
              {/* Pages */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</a> 
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Projects</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Skillset</a>
              </div>
          </div>
          {/* Contact */}
          <div className="hidden md:flex items-center">
            <a href="#" className="py-2 px-3 text-white bg-blue-500 hover:bg-blue-400 hover:text-white rounded transition duration-300">Contact</a>
          </div>

          {/* mobile button goes here */}
          <div className="md:hidden flex items-center">
            <button onClick={()=>setShowMenu(!showMobileMenu)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      { /* mobile menu */}
      {
        showMobileMenu?
        <div className="">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Projects</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Skillset</a>
        </div>
        :null
      }

    </nav>
    </>
  )
}