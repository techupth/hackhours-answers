//Exercise 6
let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here
// 1) หาค่าเฉลี่ยของคะแนนของนักเรียนในห้องทั้งหมดรวมกัน
// เมื่อหาได้แล้วให้ Log ผลลัพธ์ออกมาทางหน้าจอเป็นข้อความแบบนี้
let totalScore = 0;
for (let key in studentsScore) {
  totalScore = totalScore + studentsScore[key];
}

let averageScore = totalScore / Object.keys(studentsScore).length;
console.log(`Average score is ${averageScore}`);

// 2) หาคนที่ได้คะแนนมากที่สุดและ คะแนนที่มากที่สุด
// เมื่อหาได้แล้วให้ Log ผลลัพธ์ออกมาทางหน้าจอ
let maxScore;
let maxScoreName;
for (let key in studentsScore) {
  if (maxScore === undefined) {
    maxScore = studentsScore[key];
    maxScoreName = key;
  }
  if (maxScore < studentsScore[key]) {
    maxScore = studentsScore[key];
    maxScoreName = key;
  }
}
console.log(`${maxScoreName} has highest score, which is ${maxScore} points`);

// 3) หาคนที่ได้คะแนนที่น้อยที่สุดและ คะแนนที่น้อยที่สุด
// เมื่อหาได้แล้วให้ Log ผลลัพธ์ออกมาทางหน้าจอเป็นข้อความแบบนี้
let minScore;
let minScoreName;
for (let key in studentsScore) {
  if (minScore === undefined) {
    minScore = studentsScore[key];
    minScoreName = key;
  }
  if (minScore > studentsScore[key]) {
    minScore = studentsScore[key];
    minScoreName = key;
  }
}

console.log(`${minScoreName} has lowest score, which is ${minScore} points`);
