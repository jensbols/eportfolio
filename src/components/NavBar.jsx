export default function NavBar() {
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
              <div className="flex items-center space-x-1">
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</a> 
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Projects</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Skillset</a>
              </div>
          </div>
          {/* Contact */}
          <div className="flex items-center">
            <a href="#" className="py-2 px-3 text-yellow-900 bg-yellow-400 hover:bg-yellow-300 hover:text-yellow-800 rounded transition duration-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}