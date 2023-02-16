//ex-7
function isPalindrome(string) {
  // Start coding here
  if (string === string.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
