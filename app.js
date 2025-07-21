const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task !== "") {
    addTaskToList(task);
    taskInput.value = "";
  }
});

function addTaskToList(task) {
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
}

