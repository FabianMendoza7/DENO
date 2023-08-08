import type { Post } from "../types.d.ts";
import { parse } from "frontmatter";
import { render } from "https://deno.land/x/gfm@0.2.5/mod.ts";

export async function loadPost(id: string): Promise<Post | null> {
  let raw: string;

  try {
    raw = await Deno.readTextFile(`./content/posts/${id}.md`);

    if (!raw) {
      return null;
    }
  } catch {
    return null;
  }

  const { data, content } = parse(raw);
  const params = data as Record<string, string>;
  //console.log(data);

  const post: Post = {
    id,
    title: params.title,
    body: render(content),
    date: new Date(params.date),
    excerpt: params.excerpt,
  };

  return post;
}

export async function listPosts(): Promise<(Post | null)[]> {
  const promises: any[] = [];

  for await (const entry of Deno.readDir("./content/posts")) {
    const { name } = entry;
    const [id] = name.split(".");
    if (id) promises.push(loadPost(id));
  }

  const posts: (Post | null)[] = await Promise.all(promises) as Post[];

  posts.sort((a, b): number => {
    return b.date.getTime() - a.date.getTime();
  });

  return posts;
}

export async function listPostsSequentially(): Promise<Post[]> {
  const posts: Post[] = [];

  for await (const entry of Deno.readDir("./content/posts")) {
    const { name } = entry;
    const [id] = name.split(".");
    const post: Post | null = await loadPost(id);

    if (!post) continue;
    posts.push(post);
  }

  return posts;
}
