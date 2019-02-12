let todoList = {
	todos: [],
	showTodos: function() {
		if(this.todos.length === 0) {
			console.log("You have no tasks.");
		} else {
			console.log("My Todo List:");
			for(var i = 0; i < this.todos.length; i++) {
				// shows whether a task has been completed or not
				if(this.todos[i].completed === true) {
					var taskCompleted = "(x)";
				} else {
					taskCompleted = "( )";
				}
				console.log(i+1 + ". " + taskCompleted + " " + this.todos[i].text);
			}
		}
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
