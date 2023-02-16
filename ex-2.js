// Exercise 2
let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  return words.filter((word) => word.length >= 5);
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
