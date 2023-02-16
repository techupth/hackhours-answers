let words = ["hello", "world"];
// Exercise 1
function getWordLengths(words) {
  return words.map((word) => word.length);
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
