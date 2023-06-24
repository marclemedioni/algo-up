import { test, expect } from "vitest";
import fibonacci from "../exercices/fibonacci";

test("fibonacci is a function", () => {
  expect(typeof fibonacci).toEqual("function");
});

test("expects fibonacci of 5 to equal 5", async () => {
  expect(await fibonacci(5)).toEqual(5);
});

test("expects fibonacci of 6 to equal 8", async () => {
  expect(await fibonacci(6)).toEqual(8);
});

test("expect fibonacci of 10 is 55", async () => {
  expect(await fibonacci(10)).toEqual(55);
});

test("expects fibonacci of 15 to equal 610", async () => {
  expect(await fibonacci(15)).toEqual(610);
});

test("BONUS: expects fibonacci of 25 to equal 75025 in less then 50ms", async () => {
  expect(await fibonacci(25)).toEqual(75025);
}, 50);
