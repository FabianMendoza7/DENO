import { getDataUrl } from "./affiliate_data.ts";
import { assertMatch } from "./deps.ts";

Deno.test({
  name: "request uses HTTPS",
  fn: () => {
    const url: string = getDataUrl(5);
    assertMatch(url, /https/);
  },
  only: true,
});
