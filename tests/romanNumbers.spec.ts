import { test, expect } from "vitest";
import { romanToInt, intToRoman } from "../exercices/romanNumbers";

test("Tests to see if romanToInt is a function", () => {
  expect(typeof romanToInt).toEqual("function");
});

test("Expects return value of romanToInt to be a number", () => {
  expect(typeof romanToInt("XXI")).toEqual("number");
});

test("Expects romanToInt of 'II' to return 2", () => {
  expect(romanToInt("II")).toEqual(2);
});

test("Expects romanToInt of 'III' to return 3", () => {
  expect(romanToInt("III")).toEqual(3);
});

test("Expects romanToInt 'V' to return 5", () => {
  expect(romanToInt("V")).toEqual(5);
});

test("Expects romanToInt of 'XCIX' to return 99", () => {
  expect(romanToInt("XCIX")).toEqual(99);
});

test("Expects romanToInt of 'MMMCMXCIX' to return 3999", () => {
  expect(romanToInt("MMMCMXCIX")).toEqual(3999);
});

test("Expects romanToInt of 'XVI' to return 16", () => {
  expect(romanToInt("XVI")).toEqual(16);
});

test("Expects romanToInt of 'IX' to return 9", () => {
  expect(romanToInt("IX")).toEqual(9);
});

test("Expects romanToInt of 'XXI' to return 21", () => {
  expect(romanToInt("XXI")).toEqual(21);
});

test("Expects romanToInt of 'MDCLXVI' to return 1666", () => {
  expect(romanToInt("MDCLXVI")).toEqual(1666);
});

test("Expects romanToInt of 'MMXXIII' to return 2023", () => {
  expect(romanToInt("MMXXIII")).toEqual(2023);
});

test("Expects romanToInt of 'MCMXC' to return 1990", () => {
  expect(romanToInt("MCMXC")).toEqual(1990);
});

test("Expects romanToInt of 'MDCLXVI' to return 1766", () => {
  expect(romanToInt("MDCLXVI")).not.toEqual(1766);
});

test("Expects romanToInt of 'MMMCMXCIX' to return 3999", () => {
  expect(romanToInt("MMMCMXCIX")).toEqual(3999);
});

test("Tests to see if intToRoman is a function", () => {
  expect(typeof intToRoman).toEqual("function");
});

test("Expects return value of intToRoman to be a string", () => {
  expect(typeof intToRoman(42)).toEqual("string");
});

test("Expects intToRoman of 2 to return 'II'", () => {
  expect(intToRoman(2)).toEqual("II");
});

test("Expects intToRoman of 3 to return 'III'", () => {
  expect(intToRoman(3)).toEqual("III");
});

test("Expects intToRoman of 5 to return 'V'", () => {
  expect(intToRoman(5)).toEqual("V");
});

test("Expects intToRoman of 9 to return 'IX'", () => {
  expect(intToRoman(9)).toEqual("IX");
});

test("Expects intToRoman of 16 to return 'XVI'", () => {
  expect(intToRoman(16)).toEqual("XVI");
});

test("Expects intToRoman of 21 to return 'XXI'", () => {
  expect(intToRoman(21)).toEqual("XXI");
});

test("Expects intToRoman of 99 to return 'XCIX'", () => {
  expect(intToRoman(99)).toEqual("XCIX");
});

test("Expects intToRoman of 1666 to return 'MDCLXVI'", () => {
  expect(intToRoman(1666)).toEqual("MDCLXVI");
});

test("Expects intToRoman of 1990 to return 'MCMXC'", () => {
  expect(intToRoman(1990)).toEqual("MCMXC");
});

test("Expects intToRoman of 2023 to return 'MMXXIII'", () => {
  expect(intToRoman(2023)).toEqual("MMXXIII");
});

test("Expects intToRoman to NOT return incorrect string", () => {
  expect(intToRoman(1766)).not.toEqual("MDCLXVI");
});

test("Expects intToRoman to return correct string", () => {
  expect(intToRoman(3999)).toEqual("MMMCMXCIX");
});
