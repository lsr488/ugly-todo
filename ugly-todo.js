let todoList = {
	todos: ["make sandwich", "walk dog", "do laundry"],
	showTodos: function() {
		console.log("My todos:", this.todos);
	},
	addItem: function(item) {
		this.todos.push(item);
		this.showTodos();
		console.log(`"${item}" has been added.`);
	},
	editItem: function(index, newContent) {
		this.todos[index] = newContent;
		this.showTodos();
		console.log(`Item ${index + 1} is now "${this.todos[index]}"`);
	},
	delItem: function(index) {
		console.log(`"${this.todos[index]}" has been deleted.`);
		this.todos.splice(index, 1);
		this.showTodos();
	}
}
