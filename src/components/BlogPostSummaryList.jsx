import {BLOG_POST} from "../mock_data/blog-post-mock"
import BlogPostSummary from "./BlogPostSummary"

export default function BlogPostSummaryList() {
  return (
    <>
      <div>
        {BLOG_POST.map((blogPost) => (
          <BlogPostSummary key={blogPost.id} {...blogPost} />
        ))}
      </div>
    </>
  )
}