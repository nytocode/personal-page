import { getAllPostsMeta } from "@/lib/mdx";

export default async function Blog() {
  const posts = await getAllPostsMeta();

  return (
    <div>
      {posts.map((post) => (
        <div>
          <span>{post.title}</span>
          <span>{post.date}</span>
          <span>{post.author}</span>
        </div>
      ))}
    </div>
  );
}
