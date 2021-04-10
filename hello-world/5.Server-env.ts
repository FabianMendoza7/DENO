import { serve } from "https://deno.land/std@0.76.0/http/server.ts";

const env = Deno.env.toObject();

//console.log(env);

const HOST: string = env.HOST || "127.0.0.1";
const PORT: number = Number(env.PORT) || 5000;
console.log(HOST, PORT);

const s = serve({port: PORT, hostname: HOST});

console.log(`Deno ejecutando por el puerto ${PORT} y el host ${HOST}`);

for await(const req of s){
    req.respond({ body: "Hola Deno!\n"});
}
