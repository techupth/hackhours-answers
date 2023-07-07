// Exercise 4
const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  const completedTodos = todos.filter((todo) => {
    // หรืออาจจะเขียนแบบนี้ได้ return todo.completed ซึ่งมีค่าเท่ากันกับบรรทัดด้านล่าง
    return todo.completed === true;
  });
  return completedTodos;
}

getCompletedTodo(todos);

/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
