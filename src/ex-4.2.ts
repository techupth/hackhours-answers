function processData(data: unknown) {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  return "Not a string";
}

console.log(processData("hello")); // "HELLO"
console.log(processData(123)); // "Not a string"
