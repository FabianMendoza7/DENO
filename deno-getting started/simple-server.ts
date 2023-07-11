import { serve } from "https://deno.land/std@0.71.0/http/server.ts";
const s = serve({ port: 3000 });
for await (const req of s) {
  const message: string =
    `Welcome to DENO! Thanks for the ${req.method} request`;
  req.respond({ body: message });
}
