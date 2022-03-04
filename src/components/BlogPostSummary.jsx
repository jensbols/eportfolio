
import { blogPreviewImages } from "../util/blogpreviewImages"

export default function BlogPostSummary({title, text, date, icon}) {
  return (
    <>
      <h2 className="text-center text-4xl my-10">Recent Posts</h2>
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto flex space-x-2">
          { /* image */}
          <div className="w-1/3 border border-black ml-10">
          <img src={blogPreviewImages[`${icon}`]} alt="blog post"></img>
          </div>
          <div className="w-2/3 border border-black max-h-50 overflow-hidden">
            { /* right side */}
            <div className="flex justify-between">

            <h2 className="text-3xl mx-3 mt-3">{title}</h2>
            <p className="m-2">{date}</p>
            </div>
            <div className="m-4 border border-black overflow-ellipsis">
            <p className="">{text}</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}