import { getThresholdPrice } from "./pricing_rules.ts";
import { assertEquals } from "./deps.ts";

Deno.test("threshold for affiliate ID 5", () => {
  const price = getThresholdPrice(5);

  assertEquals(price, 40);
});
