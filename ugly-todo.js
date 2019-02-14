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
				console.log(taskCompleted + " " + this.todos[i].text);
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
	},
	toggleAll: function() {
		var completedTodos = 0;
		var totalTodos = this.todos.length;
		// get number of completed iems
		for(var i = 0; i < totalTodos; i++) {
			if(this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		// if everything's true, make everything false
		if(completedTodos === totalTodos) {
			for(var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			// else, make everything true
			for(var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}			
		}
		this.showTodos();
	}
}

// this is used instead of declaring individual document.querySelector variables and eventListeners, and paired with the html on-click="" attribute
var handlers = {
	clearInputs: function(field) {
		field.value = "";
	},
	showTodos: function() {
		todoList.showTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
	},
	addItem: function() {
		var addTodoTextInput = document.getElementById("add-todo-text-input");
		todoList.addItem(addTodoTextInput.value);
		// addTodoTextInput.value = "";
		this.clearInputs(addTodoTextInput);
	},
	editItem: function() {
		var changeTodoTextInput = document.getElementById("change-todo-text-input");
		var changeTodoPositionInput = document.getElementById("change-todo-position-input");
		todoList.editItem(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		// changeTodoPositionInput.value = "";
		// changeTodoTextInput.value = "";
		this.clearInputs(changeTodoPositionInput);
		this.clearInputs(changeTodoTextInput);
	},
	delItem: function() {
		var deleteTodoPositionInput = document.getElementById("delete-todo-position-input");
		todoList.delItem(deleteTodoPositionInput.valueAsNumber);
		// deleteTodoPositionInput.value = "";
		this.clearInputs(deleteTodoPositionInput);
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById("toggle-completed-position-input");
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		// toggleCompletedPositionInput.value = "";
		this.clearInputs(toggleCompletedPositionInput);
	}
}

// responsible for things SEEN on page
var view = {
	showTodos: function() {
		var todosOl = document.querySelector("ol");
		todosOl.innerHTML = "";		
		// creates 1 <li> per item in the todos array
		for(var i = 0; i < todoList.todos.length; i++) {
			var todosLi = document.createElement("li");
			todosLi.textContent = todoList.todos[i].text;
			todosOl.appendChild(todosLi);
		}
	},
}

