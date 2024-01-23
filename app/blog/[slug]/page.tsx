import { getPostBySlug } from "@/lib/mdx";

export default async function Post({ params }: { params: { slug: string } }) {
  const { meta, content } = await getPostBySlug(params.slug);

  return <div className="prose dark:prose-invert">{content}</div>;
}
