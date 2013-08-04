var todoListElement = $("#todoList");
var formElement = $("#addTodoForm");

// Rendering

var renderTodoList = function() {
	var html = "";
	for(todo in todoList) {
		// Løper igjennom listen og konkatinerer html
		html = html + "<li>" + todoList[todo].render(); + "</li>";
	}
	todoListElement.html(html);
};

// Todo

var Todo = function(task) {
	this.task = task;
};

Todo.prototype.render = function() {
	return this.task + " <a href='#' class='btn remove'>Remove</a> <a href='#' class='btn change'>Change</a></li>";
};

// Todo List

var todoList = [];

// var todoList = (function() {
// 	var savedList = JSON.parse(localStorage.getItem("todos"));
// 	var returnedList = [];
// 	if(savedList) {
// 		for(i = 0; i < savedList.length; i++) {
// 			var t = new Todo(savedList[i].task);
// 			returnedList.push(t);
// 		}
// 	}
// 	return returnedList;
// })(); 

// var saveTodoList = function() {
// 	localStorage.setItem("todos", JSON.stringify(todoList))
// };

// Add/remove item

var addTodo = function(task) {
	var todo = new Todo(task); // Lager en ny Todo
	todoList.push(todo); // Legger den til i arrayet
	$(window).trigger("todolistChanged"); 
};

var removeTodo = function(index) {
	todoList.splice(index, 1);
	$(window).trigger("todolistChanged");
};

// Event handlers

var addTodoHandler = function(e) {
	e.preventDefault(); // Forhindrer default oppførsel 
	var input = $(this).find("input"); 
	var task = input.val();
	if($.trim(task) !== "") { // Sjekker om det er skrevet inn en task
		addTodo(task); // Lager i så fall en ny todo

		input.val(""); // Gjør klart for å skrive inn ny todo
		input.focus(); 
	} 
};

var removeTodoHandler = function(e) {
	var index = $(this).closest("li").index(); 
	removeTodo(index);
};

var changeTodoHandler = function(e) {
	var index = $(this).closest("li").index(); 
	var task = todoList[index].task;
	formElement.find("input").val(task);
	disableSubmitEvents();
	enableChange(index); 
};

// Event listening

var disableSubmitEvents = function() {
	formElement.off("submit");
};

var enableAdding = function() {
	formElement.on("submit", addTodoHandler);
};

var enableChange = function(index) {
	var input = formElement.find("input");
	input.focus(); 
	formElement.on("submit", function(event) {
		event.preventDefault(); 
		var modifiedTask = input.val(); 
		if($.trim(modifiedTask) !== "") {
			todoList[index].task = modifiedTask; 
			$(window).trigger("todolistChanged"); 
			disableSubmitEvents(); 
			enableAdding(); 
			input.val("");
		}
	});
};

enableAdding(); 
todoListElement.on("click", ".remove", removeTodoHandler);
todoListElement.on("click", ".change", changeTodoHandler);
$(window).on("todolistChanged", renderTodoList);
// $(window).on("todolistChanged", saveTodoList);
// renderTodoList(); 