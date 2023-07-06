function isPlainObject(value) {
  // Start coding here
  if (value == null) {
    return false;
  }

  if (Array.isArray(value)) {
    return false;
  }

  if (typeof value == "object") {
    return true;
  }
}

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
