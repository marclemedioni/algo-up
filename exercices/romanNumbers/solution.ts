// Given a Roman Numeral as a string return its value as an integer
// Then do the opposite with integer to roman

// List of Symbols - Values
// Symbol    Value
//  I          1
//  V          5
//  X          10
//  L          50
//  C          100
//  D          500
//  M          1.000

// Example
// romanToInt("XXI") => 21
// romanToInt("MDCLXVI") => 1666
// romanToInt("MMVIII") => 2008
// romanToInt("MCMXC") =>  1990

// Example
// intToRoman(21) => "XXI"
// intToRoman(1666) => "MDCLXVI"
// intToRoman(2008) => "MMVIII"
// intToRoman(1990) => "MCMXC"

const NUMBERS: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

export const romanToInt = (roman: string): number => {
  return roman
    .split("")
    .reduce(
      (memo, value, index, array) =>
        NUMBERS[array[index + 1]] > NUMBERS[value] ? memo - NUMBERS[value] : memo + NUMBERS[value],
      0
    );
};

export const intToRoman = (n: number): string => {
  let roman = "";

  roman += "M".repeat(n / 1000);
  n %= 1000;
  roman += "CM".repeat(n / 900);
  n %= 900;
  roman += "D".repeat(n / 500);
  n %= 500;
  roman += "CD".repeat(n / 400);
  n %= 400;
  roman += "C".repeat(n / 100);
  n %= 100;
  roman += "XC".repeat(n / 90);
  n %= 90;
  roman += "L".repeat(n / 50);
  n %= 50;
  roman += "XL".repeat(n / 40);
  n %= 40;
  roman += "X".repeat(n / 10);
  n %= 10;
  roman += "IX".repeat(n / 9);
  n %= 9;
  roman += "V".repeat(n / 5);
  n %= 5;
  roman += "IV".repeat(n / 4);
  n %= 4;
  roman += "I".repeat(n);

  return roman;
};
