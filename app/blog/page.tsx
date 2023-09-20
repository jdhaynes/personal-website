import { getAllPostsMetadata } from "@/lib/blog";
import PostList from "@/components/blog/PostList";

const BlogHomePage = () => {
  const postMetadata = getAllPostsMetadata();
  return <PostList posts={postMetadata} />;
};

export default BlogHomePage;
