import { Handlers, PageProps } from "$fresh/server.ts";
import type { Post } from "../../types.d.ts";
import { loadPost } from "../../utils/posts.ts";
import { CSS } from "https://deno.land/x/gfm@0.2.5/mod.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    const post: Post | null = await loadPost(id);
    return ctx.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props?.data || {};
  console.log(">> post.body", post.body);
  return (
    <article class="p-4">
      <h1 class="text-2xl font-bold">{post.title}</h1>
      <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.body }}
      >
      </div>
    </article>
  );
}
