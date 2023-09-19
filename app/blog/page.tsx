import * as fs from "fs";
import Link from "next/link";
import { getAllPostsMetadata } from "@/lib/blog";

const BlogHomePage = () => {
  const postMetadata = getAllPostsMetadata();
  const postPreviews = postMetadata.map((post) => (
      <div>
        <Link href={`/blog/${post.slug}`}>
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
        </Link>
      </div>
  ));

  return <div>
    {postPreviews}
  </div>
}


export default BlogHomePage;