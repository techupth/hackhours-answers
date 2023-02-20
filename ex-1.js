//Exercise-1
function addByX(x) {
  function add(y) {
    return y + x;
  }
  return add;
}

// Uncomment โค้ดด้านล่างเพื่อดูผลลัพธ์ของการทำงาน

const addByTwo = addByX(2);
console.log("addByTwo: ", addByTwo);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); // => should return 4
console.log(addByThree(2)); // => should return 5
