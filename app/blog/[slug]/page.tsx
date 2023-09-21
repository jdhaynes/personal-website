import { getAllPostsMetadata, getPostContent } from "@/lib/blog";
import Post from "@/components/blog/Post";

type Params = { slug: string };

const BlogPostPage = ({ params }: { params: Params }) => {
  const slug = params.slug;
  const post = getPostContent(slug);

  return <Post {...post} />;
};

export const generateStaticParams = (): Params[] => {
  let posts = getAllPostsMetadata();
  posts = posts.filter((post) => post.isPublished);

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default BlogPostPage;
