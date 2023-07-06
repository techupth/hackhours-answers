//Exercise 2
function countVowels(words) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("TechUp")); // Output: 2
