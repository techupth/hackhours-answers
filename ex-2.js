//ex-2
let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here
let newStudentProfile = { ...studentProfile };
newStudentProfile.scores = { ...newStudentProfile.scores, ...studentScores };

// newStudentProfile.scores = { ...studentScores };
console.log(newStudentProfile);
