let todoList = {
	todos: [],
	showTodos: function() {
		console.log("My todos:", this.todos);
	},
	addItem: function(todoText) {
		this.todos.push({
				text: todoText,
				completed: false
			});
		this.showTodos();
	},
	editItem: function(index, todoText) {
		this.todos[index].text = todoText;
		this.showTodos();
	},
	delItem: function(index) {
		this.todos.splice(index, 1);
		this.showTodos();
	},
	toggleCompleted: function(index) {
		let todo = this.todos[index];
		todo.completed = !todo.completed;
		this.showTodos();
	}
}
