// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let i = 0; i < array.length; i++) {
    operation(array[i]);
  }
}

const newEmployeeSalaries = [];

function addSalary5000(previousSalary) {
  newEmployeeSalaries.push(previousSalary + 5000);
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

// Using `forEach` function here
forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
