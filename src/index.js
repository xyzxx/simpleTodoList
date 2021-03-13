import "./styles.css";
const app = document.querySelector("#app");
const todoInput = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", addTodo);
ul.addEventListener("click", deleteTodo);

function addTodo(e) {
  e.preventDefault();

  const li = document.createElement("li");
  li.innerText = todoInput.value;
  ul.appendChild(li);
  app.appendChild(ul);
  todoInput.value = "";
}

function deleteTodo(e) {
  e.target.nodeName === "LI" && e.target.remove();
}
