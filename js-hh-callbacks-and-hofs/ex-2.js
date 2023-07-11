//Exercise #2: At Least Five Function

function atLeastFive(array, callback) {
  // Start coding here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      count++;
    }
  }
  return count >= 5;
}

function checkGradeOver70(score) {
  return score > 70;
}

const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 12, 40, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
