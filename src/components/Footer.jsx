export default function Footer() {
  return (
    <>
    <div className="max-w-full bg-gray-900 pt-8">

    <footer className="max-w-7xl mx-auto bg-transparent">
      <div className="py-4 border-b-4 border-blue-500 space-x-6 flex justify-center mx-10">
        <a className="text-2xl font-semibold text-gray-200" href="#">Home</a>
        <a className="text-2xl font-semibold text-gray-200" href="#">Skills</a>
        <a className="text-2xl font-semibold text-gray-200" href="#">Projects</a>
      </div>
      <div className="mt-5 mx-5 text-center pb-10 text-gray-400">
        <p>
          This website is a work in progress and will be updated when I learn new things.
        </p>
      </div>
      
    </footer>
    <div className="max-w-full bg-blue-500 text-center text-white font-medium">
    <p className="text-lg">Copyright &copy; 2022 Jens Bols. All Rights Reserved.</p>
  </div>
    </div>
  </>
  )
}