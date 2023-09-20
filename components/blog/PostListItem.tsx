import React from "react";
import { PostMetadataWithSlug } from "@/lib/blog";
import Link from "next/link";

const PostListItem: React.FC<{ post: PostMetadataWithSlug }> = ({ post }) => {
  return (
    <div>
      <div>{post.date.toDateString()}</div>
      <Link href={`blog/${post.slug}`}>
        <div className="font-bold text-3xl">{post.title}</div>
      </Link>
      <div className="flex space-x-2">
        {post.tags.map((tag) => (
          <span className="bg-blue-100 py-1 px-2 rounded-md">{tag}</span>
        ))}
      </div>
      <div>{post.subtitle}</div>
    </div>
  );
};

export default PostListItem;
