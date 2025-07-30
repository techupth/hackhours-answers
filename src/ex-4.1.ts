type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  if (user.age === undefined) {
    // กรณีไม่มีค่า age ให้คืนค่า false
    return false;
  } else {
    // กรณีมีค่า age ให้ตรวจสอบว่า >= 18 หรือไม่
    return user.age >= 18;
  }
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // false
