/* Author: Pogi Tangkad
   JavaScript file for todo-list.html
*/

console.log("JavaScript ToDo List");

function addTodo() {
  const todo = document.getElementById("new-todo").value;
  if (todo.length < 3) {
    return alert("You must have at least 3 characters for your todo.");
  }
  const list = document.getElementById("list");
  const li = document.createElement("li");
  const text = document.createTextNode(todo);
  li.setAttribute("ondblclick", "this.remove()");
  li.appendChild(text);
  list.appendChild(li);
  document.getElementById("new-todo").value = "";
}
