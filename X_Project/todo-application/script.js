const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");

function addTask(event) {
  event.preventDefault();

  const taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Please enter a task!");
    return;
  }

  createTask(taskName);
  taskInput.value = "";
  updateCounts();
}

function createTask(taskName, completed = false) {
  const li = document.createElement("li");

  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  const taskText = document.createElement("span");
  taskText.textContent = taskName;
  taskText.style.cursor = "pointer";

  if (completed) {
    taskText.classList.add("text-decoration-line-through");
    taskText.classList.add("text-muted");
  }

  // Click task name to mark complete/incomplete
  taskText.addEventListener("click", function () {
    taskText.classList.toggle("text-decoration-line-through");
    taskText.classList.toggle("text-muted");
    updateCounts();
  });

  const actions = document.createElement("div");
  actions.className = "d-flex gap-2";

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-primary btn-sm";

  editBtn.addEventListener("click", function () {
    const newName = prompt("Edit your task:", taskText.textContent);

    if (newName !== null && newName.trim() !== "") {
      taskText.textContent = newName.trim();
    } else if (newName !== null) {
      alert("Task name cannot be empty!");
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-danger btn-sm";

  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCounts();
  });

  actions.append(editBtn, deleteBtn);
  li.append(taskText, actions);
  todoList.appendChild(li);
}

function updateCounts() {
  const tasks = todoList.querySelectorAll("li");
  const total = tasks.length;

  const completed = [...tasks].filter((task) =>
    task
      .querySelector("span")
      .classList.contains("text-decoration-line-through"),
  ).length;

  document.getElementById("totalCount").textContent = total;
  document.getElementById("completeCount").textContent = completed;
  document.getElementById("pendingCount").textContent = total - completed;
}
