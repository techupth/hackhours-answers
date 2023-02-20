//ex-4
let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
const newStudentProfile = { ...studentProfile };
newStudentProfile.hobbies = [
  ...newStudentProfile.hobbies,
  ...additionalHobbies,
];
console.log(newStudentProfile);
