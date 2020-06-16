import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { isEven } from "./mod.ts";

var checkTwo = isEven(5);
var checkThree = isEven(40);
var checkNegative = isEven(-6);
var strNum = JSON.stringify(4);

var checkLarge = isEven(Number.MAX_SAFE_INTEGER); // (2^53 - 1)
var checkSmall = isEven(Number.MIN_SAFE_INTEGER); // (-(2^53 - 1))

Deno.test("testing second input", function test(): void {
  assertEquals(checkTwo, false);
});

Deno.test("testing third input", function test(): void {
  assertEquals(checkThree, true);
});

Deno.test("testing negative input", function test(): void {
  assertEquals(checkNegative, true);
});

Deno.test("testing large input", function test(): void {
  assertEquals(checkLarge, false);
});

Deno.test("testiing small input", function test(): void {
  assertEquals(checkSmall, false);
});
