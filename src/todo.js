const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo");
const todoList = document.querySelector(".todo-list");
const savedTodo = localStorage.getItem("todos");
let todos = [];

function todoSubmit(event) {
  event.preventDefault();
  const todoObj = {
    text: todoInput.value,
    id: Date.now(),
  };
  todos.push(todoObj);
  printTodo(todoObj);
  todoInput.value = "";
  saveTodo();
}

function printTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

todoForm.addEventListener("submit", todoSubmit);

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  todos = parsedTodo;
  parsedTodo.forEach(printTodo);
}
