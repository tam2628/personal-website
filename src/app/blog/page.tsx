import { PageWrapper } from "@/components/page-wrapper";
import { getPosts } from "../api/hashnode";
import Link from "next/link";

export default async function Blog() {
  const postsData = await getPosts(0);
  const posts = postsData.data.user.publication.posts;

  return (
    <PageWrapper>
      <main className="flex flex-col items-center min-h-screen p-10 color-white">
        <div className="lg:w-3/5 md:w-4/5 sm:w-full">
          <h3 className="text-4xl mb-10">boring tech blog</h3>

	{!posts.length && <p>welcome to the hollowness of this page!</p>}

          {!!posts.length && (
            <ul>
              {posts.map((post: any, key: number) => (
                <li key={key}>
                  <div>
                    <h1 className="text-xl">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h1>
                    <span className="text-slate-400 text-sm">
                      published on {new Date(post.dateAdded).toDateString()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </PageWrapper>
  );
}
