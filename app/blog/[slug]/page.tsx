import { getPostBySlug } from "@/lib/mdx";

export default async function Post() {
  const { meta, content } = await getPostBySlug("post-prova");
  console.log(meta);

  return <div>{content}</div>;
}
