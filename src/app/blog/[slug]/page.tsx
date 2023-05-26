import "./post.css";
import { getPost } from "@/app/api/hashnode";
import { PageWrapper } from "@/components/page-wrapper";

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPost(params.slug);
  const post = postData.data.post;

  return (
    <PageWrapper>
      <main className="flex flex-col items-center min-h-screen p-10 color-white">
        <div className="lg:w-3/5 md:w-4/5 sm:w-full">
          <h1 className="text-4xl mb-10">{post.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              whiteSpace: "pre-line",
            }}
          ></div>
        </div>
      </main>
    </PageWrapper>
  );
}
