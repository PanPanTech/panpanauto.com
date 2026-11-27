import Link from "next/link";
import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";
import { getPosts } from "@/lib/posts";

const page = docs.blog;
export const metadata = docMetadata(page);
export default function BlogPage() {
  const posts = getPosts();
  return (
    <InteriorPage page={page}>
      <div className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-navy-950">Buyer guides</h2>
        <ul className="mt-5 space-y-5">
          {posts.map((post) => (
            <li key={post.slug} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="text-lg font-semibold">
                <Link href={post.path} className="hover:text-brass">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">{post.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </InteriorPage>
  );
}
