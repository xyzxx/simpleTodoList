import "./styles.css";
const app = document.querySelector("#app");
const todoInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addTodo);

function addTodo(e) {
  e.preventDefault();
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.innerText = todoInput.value;
  ul.appendChild(li);
  app.appendChild(ul);
  todoInput.value = "";
}
