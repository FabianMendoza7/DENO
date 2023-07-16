import { assertStringIncludes } from "./deps.ts";

// Way 1:
Deno.test("My simple string", () => {
  const msg = "Deno is awesome!";
  assertStringIncludes(msg, "awesome");
});

// Way 2:
Deno.test({
  name: "My simple string2",
  fn: () => {
    const msg = "Deno is awesome!";
    assertStringIncludes(msg, "awesome");
  },
  ignore: false,
  only: false,
  sanitizeOps: true,
  sanitizeResources: true,
});
