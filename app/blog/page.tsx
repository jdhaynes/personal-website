import { getAllPostsMetadata } from "@/lib/blog";
import PostList from "@/components/blog/PostList";
import TagsList from "@/components/blog/TagsList";

const BlogHomePage = () => {
  const postMetadata = getAllPostsMetadata();
  const postTags = Array.from(
    new Set(
      postMetadata.reduce<string[]>((acc, { tags }) => {
        return acc.concat(tags);
      }, []),
    ),
  );

  return (
    <div className="flex flex-row">
      <div className="w-[300px]">
        <h1 className="text-lg font-bold mb-2">Tags</h1>
        <TagsList tags={postTags} />
      </div>
      <div>
        <PostList posts={postMetadata} />
      </div>
    </div>
  );
};

export default BlogHomePage;
