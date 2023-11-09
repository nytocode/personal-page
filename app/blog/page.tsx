import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { getAllPostsMeta } from "@/lib/mdx";
import Link from "next/link";

export default async function Blog() {
  const posts: any[] = []; // await getAllPostsMeta();

  if (posts.length === 0) {
    return (
      <div className="h-full w-full flex items-center">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center">
              Working on new Blog posts
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Card className="relative">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <small>{post.author}</small>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
