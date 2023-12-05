let taskInputE1 = document.getElementById("taskInput");
let taskListItemsE1 = document.getElementById("todoListItems");
let addBtnE1=document.getElementById("addBtn");

let todoList=[];

let count=todoList.length
function appendTaskIntoList(){
	let taskInputValue=taskInputE1.value;
	let uniqueid=count+1;
	
	if(taskInputValue===""){
		alert("please enter task");
		return;
	}
	else{
		let newTodo={
			name:taskInputValue,
			uniqueId:uniqueid
			};
		todoList.push(newTodo);
	addTask(newTodo);
	taskInputE1.value="";
	}
	
}

addBtnE1.onclick=function(){
	appendTaskIntoList();
};

function Ondelete(todoId){
	let todoTask=document.getElementById(todoId);
	taskListItemsE1.removeChild(todoTask);
	
	let deleteTodo=todoList.findIndex(function(eachtodo){
		let eachtodoId="todo"+eachtodo.uniqueId;
		if(eachtodoId===todoId){
			return true;
		}
		else{
			return false;
		}
	});
	todoList.splice(deleteTodo,1);
}

function addTask(todo){
	let todoId="todo"+(todo.uniqueId).toString();
	let labelId="label"+(todo.uniqueId).toString();
	let checkBoxId="checkbox"+(todo.uniqueId).toString();
	
	let liE1=document.createElement("li");
	liE1.id=todoId;
	liE1.classList.add("flex");
	taskListItemsE1.appendChild(liE1);
	
	let input=document.createElement("input");
	input.classList.add("checkBox");
	input.type="checkbox";
	input.id=checkBoxId;
	liE1.appendChild(input);
	
	let divE1=document.createElement("div");
	divE1.classList.add("taskcontainer","dflex");
	liE1.appendChild(divE1);
	
	
	let labelE1=document.createElement("label");
	labelE1.for=labelId;
	labelE1.textContent=todo.name;
	divE1.appendChild(labelE1);
	
	let buttonE1=document.createElement("button");
	buttonE1.textContent="Delete";
	buttonE1.classList.add("delete_button");
	divE1.appendChild(buttonE1);
	deleteBtn.onclick=function(){
		Ondelete(todoId);
	};
	
}

for (let todo of todoList){
	addTask(todo);
}
