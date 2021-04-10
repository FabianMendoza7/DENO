/**
 * Devuelve la palabra NODE al revés: DENO.
 * @param {string} input 
 */
  export function denode(input) {
  if (input.toLowerCase() === "node") {
    return input.split("").sort().join();
  }

  return input;
}
