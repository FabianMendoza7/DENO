import { loadPost } from "../utils/posts.ts";
import { assertEquals } from "$std/testing/asserts.ts";
import type { Post } from "../types.d.ts";

Deno.test({
  name: "loadPost return null if the post does not exist",
  fn: async (): Promise<void> => {
    const post: Post | null = await loadPost("non-existent");
    if (post !== null) throw new Error("expected null");
    assertEquals(post, null);
  },
});

Deno.test({
  name: "loadPost() returns a post object if post does exist",
  fn: async (): Promise<void> => {
    const post: Post | null = await loadPost("hello-world");
    assertEquals(post?.id, "hello-world");
  },
});
