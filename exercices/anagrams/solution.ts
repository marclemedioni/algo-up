// Determine whether two given strings are anagrams of each other.
// An anagram is formed when both strings contain the same characters,
// with the same frequency, disregarding spaces, punctuation,
// and considering capital and lowercase letters as identical.

// Example -
// anagrams('listen', 'silent') -> true
// anagrams('HATRED', 'red hat') -> true
// anagrams('fizz', 'buzz') -> false

const anagrams = (strA: string, strB: string) => {
  const lettersA = strA.replace(/\W/g, "").toLowerCase().split("").sort().join("");
  const lettersB = strB.replace(/\W/g, "").toLowerCase().split("").sort().join("");

  return lettersA === lettersB;
};

export default anagrams;
