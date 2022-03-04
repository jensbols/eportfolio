
import { blogPreviewImages } from "../util/blogpreviewImages"

export default function BlogPostSummary({title, text, date, icon}) {
  return (
    <>
      <div className="bg-gray-100 mb-10">
        <div className="max-w-6xl mx-auto flex space-x-2">
          { /* image */}
          <div className="w-1/3 border ml-10">
          <img src={blogPreviewImages[`${icon}`]} alt="blog post" className="h-60 border-l-8 border-blue-500"></img>
          </div>
          <div className="w-2/3 border-black max-h-50 overflow-hidden">
            { /* right side */}
            <div className="flex justify-between">

            <h2 className="text-3xl mx-3 mt-3">{title}</h2>
            <p className="m-2">{date}</p>
            </div>
            <div className="m-4">
            <p className="">{text}</p>
            <button className="float-right bg-blue-500 p-2 rounded-lg hover:bg-blue-400 transition duration-300">Read more</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}