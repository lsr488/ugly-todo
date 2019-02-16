let todoList = {
	todos: [],
	addItem: function(todoText) {
		this.todos.push({
				text: todoText,
				completed: false
			});
	},
	editItem: function(index, todoText) {
		this.todos[index].text = todoText;
	},
	delItem: function(index) {
		this.todos.splice(index, 1);
	},
	toggleCompleted: function(index) {
		let todo = this.todos[index];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		var completedTodos = 0;
		var totalTodos = this.todos.length;

		// get number of completed iems
		this.todos.forEach(function(todo) {
			if(todo.completed === true) {
				completedTodos++;
			}
		});

		// if everything's true, make everything false
		this.todos.forEach(function(todo) {
			if(completedTodos === totalTodos) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
		});
	}
}

// this is used instead of declaring individual document.querySelector variables and eventListeners, and paired with the html on-click="" attribute
var handlers = {
	clearInputs: function(field) {
		field.value = "";
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.showTodos();
	},
	addItem: function() {
		var addTodoTextInput = document.getElementById("add-todo-text-input");
		todoList.addItem(addTodoTextInput.value);
		this.clearInputs(addTodoTextInput);
		view.showTodos();
	},
	editItem: function() {
		var changeTodoTextInput = document.getElementById("change-todo-text-input");
		var changeTodoPositionInput = document.getElementById("change-todo-position-input");
		todoList.editItem(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		this.clearInputs(changeTodoPositionInput);
		this.clearInputs(changeTodoTextInput);
		view.showTodos();
	},
	delItem: function(position) {
		todoList.delItem(position);
		view.showTodos();
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById("toggle-completed-position-input");
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		this.clearInputs(toggleCompletedPositionInput);
		view.showTodos();
	}
}

// responsible for things SEEN on page
var view = {
	showTodos: function() {
		var todosOl = document.querySelector("ol");
		todosOl.innerHTML = "";		
		// creates 1 <li> per item in the todos array
		for(var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement("li");
			
			// show whether completed or not
			var todoTextWithCompletion = "";
			var todo = todoList.todos[i]
			if(todo.completed === true) {
				todoTextWithCompletion = "(x) " + todo.text;
			} else {
				todoTextWithCompletion = "( ) " + todo.text;
			}
			
			todoLi.id = i;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosOl.appendChild(todoLi);
		}
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.className = ("delete-button");
		return deleteButton;
	},
	// event delegation, everything handled via the parent element (ol), rather than adding event listeners for every child element
	setUpEventListeners: function() {
		var todosOl = document.querySelector("ol");
		todosOl.addEventListener("click", function(event) {
			var elementClicked = event.target;

			// delete button
			if(elementClicked.className === "delete-button") {
				handlers.delItem(parseInt(elementClicked.parentNode.id));
			};
		});
	},
}

view.setUpEventListeners();