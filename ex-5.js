// Exercise 5
const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  const totalStudentScore = students.reduce((acc, curr) => {
    return curr.score + acc;
  }, 0);

  return totalStudentScore / students.length;
}

getAverageStudentScore(students); // Output: 87.5
