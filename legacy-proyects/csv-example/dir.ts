for await (const dirEntry of Deno.readDir(".")) {
    console.log(dirEntry.name);
}

/*
You could also use the Deno.cwd() function in place of ".". Both represent the path to the current working directory - the folder you are executing deno run from.

Note that Deno.readDir returns an AsyncIterable which is why we use the for await ... of statement. We could also use the synchronous version Deno.readDirSync and use a regular for ... of statement.
*/