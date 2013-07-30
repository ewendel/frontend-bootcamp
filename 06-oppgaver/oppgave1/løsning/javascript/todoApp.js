var itemList = [];
var itemListElement = $("#itemList");
var formElement = $("#addItemForm");

var renderItemList = function() {
	var html = "";
	for(item in itemList) {
		html = html + "<li>" + itemList[item].task + " <a href='#' class='btn remove'>Remove</a><a href='#' class='btn change'>Change</a></li>";
	}
	itemListElement.html(html);
};

var Item = function(task) {
	this.task = task;
};

var addItem = function(task) {
	var i = new Item(task);
	itemList.push(i);
	renderItemList();
};

var removeItem = function(index) {
	itemList.splice(index, 1);
	renderItemList();
};

var addItemHandler = function(e) {
	e.preventDefault(); 
	var input = $(this).find("input");
	var task = input.val();
	if($.trim(task) !== "") {
		addItem(task);
		input.val("");
	} 
};

var removeItemHandler = function(e) {
	var index = $(this).closest("li").index(); 
	removeItem(index);
};

var changeItemHandler = function(e) {
	var index = $(this).closest("li").index(); 
	var task = itemList[index].task;
	formElement.find("input").val(task);
	disableFormEvents();
	enableChange(index); 
};

var disableFormEvents = function() {
	formElement.off("submit");
};

var enableAdding = function() {
	formElement.on("submit", addItemHandler);
};

var enableChange = function(index) {
	var input = formElement.find("input");
	input.focus(); 
	formElement.on("submit", function(event) {
		event.preventDefault(); 
		var newTask = input.val(); 
		if($.trim(newTask) !== "") {
			itemList[index].task = newTask; 
			renderItemList(); 
			disableFormEvents(); 
			enableAdding(); 
			input.val("");
		}
	});
}

enableAdding(); 
itemListElement.on("click", ".remove", removeItemHandler);
itemListElement.on("click", ".change", changeItemHandler);