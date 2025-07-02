//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }
  }
  return count >= 5;
}

function checkGradeOver70(score) {
  return score > 70;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);

/*
====================================
💡 เฉลยคำถามท้ายโจทย์:

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
   ✅ ฟังก์ชัน `checkGradeOver70` เป็น Callback Function
   - จุดสังเกต: ฟังก์ชัน `checkGradeOver70` ถูกส่งเข้าไปเป็นพารามิเตอร์ตัวที่ 2 ของฟังก์ชัน `atLeastFive`
   - และถูกเรียกใช้งานภายใน `atLeastFive` ผ่าน `operation(array[i])`

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
   ✅ ฟังก์ชัน `atLeastFive` เป็น Higher Order Function
   - จุดสังเกต: ฟังก์ชัน `atLeastFive` รับฟังก์ชันอื่น (`checkGradeOver70`) เป็นพารามิเตอร์
   - ฟังก์ชันที่รับฟังก์ชันอื่นเป็นพารามิเตอร์หรือ return ฟังก์ชันออกมา เรียกว่า Higher Order Function
====================================
*/
