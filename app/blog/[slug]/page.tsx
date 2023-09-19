import { getAllPostsMetadata, getPostContent } from "@/lib/blog";

type Params = { slug: string }

const BlogPostPage = ({ params }: { params: Params }) => {
  const slug = params.slug;
  const post = getPostContent(slug);

  return <div>
    <h1>{post.metadata.title}</h1>
    <h2>{post.metadata.subtitle}</h2>
    <p>{post.metadata.date.toString()}</p>
    <p>{post.content}</p>
  </div>
}

export const generateStaticParams = (): Params[] => {
  let posts = getAllPostsMetadata();
  posts = posts.filter((post) => post.isPublished);

  return posts.map((post) => ({
    slug: post.slug
  }));
};

export default BlogPostPage;