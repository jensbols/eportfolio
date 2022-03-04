import {BLOG_POST} from "../mock_data/blog-post-mock"
import BlogPostSummary from "./BlogPostSummary"

export default function BlogPostSummaryList() {
  return (
    <>
      <div className="bg-gray-100">
      <h2 className="text-center text-4xl my-10">Recent Posts</h2>
        {BLOG_POST.map((blogPost) => (
          <BlogPostSummary key={blogPost.id} {...blogPost} />
        ))}
      </div>
    </>
  )
}