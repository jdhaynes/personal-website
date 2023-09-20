import React from "react";
import { PostMetadataWithSlug } from "@/lib/blog";
import PostListItem from "@/components/blog/PostListItem";

const PostList: React.FC<{ posts: PostMetadataWithSlug[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col space-y-8">
      {posts.map((post) => (
        <PostListItem post={post} />
      ))}
    </div>
  );
};

export default PostList;
