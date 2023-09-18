import * as fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
  const postsDir = "posts/"
  const postsFiles = fs.readdirSync(postsDir);
  const postsMarkdownFiles = postsFiles.filter((file) => file.endsWith(".md"));
  const slugs = postsMarkdownFiles.map((file) => file.replace(".md", ""));

  return slugs;
}

const BlogHomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
      <div>
        <Link href={`/blog/${slug}`}>
          <h2>{slug}</h2>
        </Link>
      </div>
  ));

  return <div>
    {postPreviews}
  </div>
}

export default BlogHomePage;