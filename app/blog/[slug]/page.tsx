import { getPostBySlug } from "@/lib/mdx";

export default async function Post() {
  const { meta, content } = await getPostBySlug("post-prova");

  return <div className="prose dark:prose-invert">{content}</div>;
}
