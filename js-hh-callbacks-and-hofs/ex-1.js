// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(operation(array[i]));
  }
  return result;
}

function addSalary5000(previousSalary) {
  return previousSalary + 5000;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

// Using `forEach` function here
const newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================
💡 เฉลยคำถามท้ายโจทย์:

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
   ✅ ฟังก์ชัน `addSalary5000` เป็น Callback Function
   - จุดสังเกต: ฟังก์ชัน `addSalary5000` ถูกส่งเข้าไปเป็นพารามิเตอร์ตัวที่ 2 ของฟังก์ชัน `forEach`
   - และถูกเรียกใช้งานภายใน `forEach` ผ่าน `operation(array[i])`

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
   ✅ ฟังก์ชัน `forEach` เป็น Higher Order Function
   - จุดสังเกต: ฟังก์ชัน `forEach` รับฟังก์ชันอื่น (`addSalary5000`) เป็นพารามิเตอร์
   - ฟังก์ชันที่รับฟังก์ชันอื่นเป็นพารามิเตอร์หรือ return ฟังก์ชันออกมา เรียกว่า Higher Order Function
====================================
*/
