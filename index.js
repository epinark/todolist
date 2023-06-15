const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
const emptyButton = document.getElementById("empty-list");
const saveButton = document.getElementById("save-list");

addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    const itemText = document.getElementById("input").value.trim();
    if (itemText === "") {
      alert("Please enter a task.");
      return;
    }
    const todoList = document.getElementById("todo-list");
    const listItem = document.createElement("li");
    listItem.innerText = itemText;
    listItem.addEventListener("dblclick", markItemComplete);
    todoList.appendChild(listItem);
    document.getElementById("input").value = "";
  }

  function markItemComplete() {
    this.classList.toggle("completed");
  }
  
  clearButton.addEventListener("click", clearCompletedToDoItems);

  function clearCompletedToDoItems() {
    const completedItems = document.querySelectorAll(".completed");
    completedItems.forEach(function (item) {
      item.remove();
    });
  }
  
  emptyButton.addEventListener("click", emptyList);
  
  function emptyList() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = '<span>Add some items that you don\'t want to forget</span>';
  }
  
  saveButton.addEventListener("click", saveList);
  
  function saveList() {
    const todoList = document.getElementById("todo-list");
    const items = todoList.innerHTML;
    const savedItems = JSON.stringify(items);
    localStorage.setItem("todoItems", savedItems);
  }
  
  