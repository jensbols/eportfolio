export default function NavBar() {
  return (
    <>
    {/*nav bar */}
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">

              {/* Logo */}
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-gray-700">Logo</a>
              </div>
              {/* Pages */}
              <div className="flex items-center space-x-1">
                <a href="#" className="py-5 px-3 text-gray-700">About</a> 
                <a href="#" className="py-5 px-3 text-gray-700">Projects</a>
                <a href="#" className="py-5 px-3 text-gray-700">Skillset</a>
              </div>
          </div>

          {/* Contact */}
          <div className="flex items-center">
            <a href="#" className="py-3 px-3 text-yellow-900 bg-yellow-400 rounded">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    {/* content goes here */}
    <div className="py-32">
      <h2 className="font-extrabold text-4xl">contentplaceholder</h2>
    </div>
    </>
  )
}