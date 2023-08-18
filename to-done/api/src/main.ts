import { Application } from "../deps.ts";
import initRouters from "./routers/index.ts";

const app = new Application();

const URL = Deno.env.get('URL') || 'http://localhost';
const PORT: number = Number(Deno.env.get('PORT')) || 3001;

initRouters(app);

app.addEventListener("listen", () => {
    console.log("***************************************");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log(`Server listening at ${URL}:${PORT}`);
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("***************************************");
});

await app.listen({ port: PORT });