import { serve } from "https://deno.land/std@0.76.0/http/server.ts";
const port = 8000;
const s = serve({ port });
console.log(`http://localhost:${port}/`);
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
