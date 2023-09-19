import config from "@/config"
import fs from "fs";
import matter from "gray-matter";
import { z } from "zod";

const getContentFilenames = (directory: string, extension: string): string[] => {
  const allFiles = fs.readdirSync(directory);
  return allFiles.filter((file) => file.endsWith(`.${extension}`));
}

const getFileContent = (filePath: string): string => {
  return fs.readFileSync(filePath, "utf-8");
}

const frontMatterSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  date: z.coerce.date(),
  isPublished: z.boolean().optional().default(false),
  tags: z.array(z.string())
})

export type FrontMatter = z.infer<typeof frontMatterSchema>
export type PostMetadata = FrontMatter & { slug: string; }

const getFrontMatter = (markdownContent: string): FrontMatter => {
  const frontMatter = matter(markdownContent);
  return frontMatterSchema.parse(frontMatter);
}

export const getAllPostsMetadata = (): PostMetadata[] => {
  const contentDirectory = config.blog.contentDirectory;
  const contentFilenames = getContentFilenames(contentDirectory, "md");

  return contentFilenames.map((fileName: string): PostMetadata => {
    const fileContent = getFileContent(`${contentDirectory}/${fileName}`);
    const frontMatter = getFrontMatter(fileContent);
    const slug = fileName.replace(".md$", "");

    return {
      slug,
      ...frontMatter,
    }
  })
}
