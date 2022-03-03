export default function BlogPostSummary({title}) {
  return (
    <>
      <h2 className="text-center text-4xl my-10">Recent Posts</h2>
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto flex">
          { /* image */}
          <div className="w-1/3 border border-black ml-10">
          </div>
          <div className="w-2/3 border border-black">
            { /* right side */}
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </>
  )
}