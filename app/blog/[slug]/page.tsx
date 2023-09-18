import * as fs from "fs";

const getPostSlugs = (): string[] => {
  const postsDir = "posts/"
  const postsFiles = fs.readdirSync(postsDir);
  const postsMarkdownFiles = postsFiles.filter((file) => file.endsWith(".md"));
  const slugs = postsMarkdownFiles.map((file) => file.replace(".md", ""));

  return slugs;
}

const getPostContent = (slug: string): string => {
  const dir = "posts";
  const file = `${dir}/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");

  return content;
}

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const content = getPostContent(slug);

  return <div>
    <h1>This is a blog post: {slug}</h1>
    <p>{content}</p>
  </div>
}

export const generateStaticParams = (): { slug: string }[] => {
  const slugs = getPostSlugs();

  return slugs.map((slug) => (
      { slug }
  ));
};

export default BlogPostPage;