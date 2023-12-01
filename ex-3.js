let numbers = [100, 20, 3, 1000];
let minNumber;

for (let i = 0; i < numbers.length; i++) {
  if (i === 0) {
    minNumber = numbers[i];
  } else if (minNumber > numbers[i]) {
    minNumber = numbers[i];
  }
}

console.log(minNumber);
