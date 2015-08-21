var todoList;
var changeId;

// Todo prototypes
var Todo = function(task) {
	this.task = task;
};

Todo.prototype.render = function() {
	return this.task + " <a href='#' class='btn remove'>Remove</a> <a href='#' class='btn change'>Change</a></li>";
};

// Add/remove item
var addTodo = function(task) {
	var todo = new Todo(task); // Lager en ny Todo
	todoList.push(todo); // Legger den til i arrayet
};

var changeTodo = function(task, index) {
	var todo = new Todo(task); // Lager en ny Todo
	todoList[index] = todo; // oppdaterer arrayet
};

var removeTodo = function(index) {
	todoList.splice(index, 1);
	$(window).trigger("todolistChanged");
};

// Hent ut gamle todos
var restoreTodoList = function() {
	var savedTodos = localStorage.getItem("todos");
	if(savedTodos) {
		var savedList = JSON.parse(savedTodos);
		savedList.forEach(addTodo);
	} else {
		return [];
	}
};

// Lagre todos mellom refresh
var saveTodoList = function() {
	var todoTasks = todoList.map(function(todo) {return todo.task;});
	localStorage.setItem("todos", JSON.stringify(todoTasks));
};

var formElement = $("#addTodoForm");
var todoListElement = $("#todoList");

// Rendering
var renderTodoList = function() {
	// Løper igjennom listen og konkatinerer html
	var html = todoList.map(function(todo) {
		return "<li>" + todo.render() + "</li>";
	});
	todoListElement.html(html.join(""));
};

// Event handlers
var addTodoHandler = function(e) {
	e.preventDefault(); // Forhindrer default oppførsel

	var input = formElement.find("input#todoName");
	var task = input.val();

	if(task && task.trim !== "") { // Sjekker om det er skrevet inn en task
		if(!isNaN(changeId)) {
			changeTodo(task, changeId);
			changeId = undefined;
		} else {
			addTodo(task); // Lager i så fall en ny todo
		}

		// Gjør klart for å skrive inn ny todo
		input.val("").focus();
	}
};

var removeTodoHandler = function(e) {
	var index = $(this).closest("li").index();
	removeTodo(index);
};

var changeTodoHandler = function(e) {
	changeId = $(this).closest("li").index();
	var task = todoList[changeId].task;
	formElement.find("input#todoName").val(task).focus();
};


// initialize
todoList = restoreTodoList();

Array.observe(todoList, renderTodoList);
Array.observe(todoList, saveTodoList);
formElement.on("submit", addTodoHandler);
todoListElement.on("click", ".remove", removeTodoHandler);
todoListElement.on("click", ".change", changeTodoHandler);

// render
renderTodoList();