import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "app", "posts");

export const getPostBySlug = async (slug: string) => {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const file = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: file,
    options: {
      parseFrontmatter: true,
    },
  });

  return { meta: { ...frontmatter, slug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(postsDir);

  const posts: any[] = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file.replace(/\.mdx$/, ""));
    posts.push(meta);
  }

  return posts;
};
