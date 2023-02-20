//ex-1
let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let additionalProperties = {
  photo: "https://placedog.net/500",
  hobbies: ["Football", "Coding"],
};

// Start coding here
let newStudentProfile = { ...studentProfile, ...additionalProperties };
console.log(newStudentProfile);
