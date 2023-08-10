import { Handlers, PageProps } from "$fresh/server.ts";
import type { Post } from "../types.d.ts";
import { listPosts } from "../utils/posts.ts";
// Importar archivos estáticos:
import { asset } from "$fresh/src/runtime/utils.ts"; // Forma 1
import { logo } from "../utils/assets.ts"; // Forma 2 (better)

export const handler: Handlers = {
  async GET(req, ctx) {
    const posts: any = await listPosts();
    return ctx.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { posts } = data;
  console.log(">> posts:", posts);
  return (
    <main class="p-4">
      <h1 class="text-4xl font-bold">Mi Blog</h1>
      {/* Forma 1 */}
      <img src={asset("logo.png")} />
      {/* Forma 2 */}
      <img src={logo} />

      {posts.map((post: Post) => {
        <article class="p-4">
          <h2 class="text-2xl font-bold">
            <a class="hover:text-blue-600" href={`/blog/${post.id}`}>
              {post.title}
            </a>
          </h2>
          <time>
            {Intl.DateTimeFormat("es").format(post.date)}
          </time>
        </article>;
      })}
    </main>
  );
}
