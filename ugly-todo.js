// Should have a place to store todos --> use arrays
let todos = ["item 1", "item 2", "item 3"];
console.log("My todos:", todos);

function showTodos() {
	console.log("My todos:", todos);
}

function addTodo(item) {
	todos.push(item);
}

function editTodo(index, newContent) {
	todos[index] = newContent;
	showTodos();
	console.log(`Todo updated: item ${index + 1} is now ${todos[index]}`);
}

function delTodo(index) {
	todos.splice(index, 1);
	showTodos();
}