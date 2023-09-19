import config from "@/config"
import fs from "fs";
import matter from "gray-matter";
import { z } from "zod";

const frontMatterSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  date: z.coerce.date(),
  isPublished: z.boolean().optional().default(false),
  tags: z.array(z.string())
})

type PostMetadata = z.infer<typeof frontMatterSchema>
type PostMetadataWithSlug = PostMetadata & { slug: string }
type PostContent = { metadata: PostMetadata, content: string }
type Post = PostContent & { slug: string }

const getContentFilenames = (directory: string, extension: string): string[] => {
  const allFiles = fs.readdirSync(directory);
  return allFiles.filter((file) => file.endsWith(`.${extension}`));
}

const getFileContent = (filePath: string): string => {
  return fs.readFileSync(filePath, "utf-8");
}

const parseMarkdown = (markdown: string): PostContent => {
  const { data: frontMatter, content } = matter(markdown);
  const metadata = frontMatterSchema.parse(frontMatter);

  return {
    metadata,
    content
  }
};

export const getAllPostsMetadata = (): PostMetadataWithSlug[] => {
  const contentDirectory = config.blog.contentDirectory;
  const contentFilenames = getContentFilenames(contentDirectory, "md");

  return contentFilenames.map((fileName: string): PostMetadataWithSlug => {
    const slug = fileName.replace(".md$", "");
    const markdown = getFileContent(`${contentDirectory}/${fileName}`);
    const content = parseMarkdown(markdown);

    return {
      slug,
      ...content.metadata
    }
  })
}

export const getPostContent = (slug: string): Post => {
  const contentDirectory = config.blog.contentDirectory;
  const markdown = getFileContent(`${contentDirectory}/${slug}.md`);
  const content = parseMarkdown(markdown);

  return {
    slug,
    ...content
  }
}
