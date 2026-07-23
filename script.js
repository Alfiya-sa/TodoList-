const button = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

button.addEventListener("click", addTask);

function addTask() {

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.textContent = task;

    // Mark task as completed
    taskText.onclick = function () {
        taskText.classList.toggle("completed");
    };


    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete";

    deleteBtn.onclick = function () {
        li.remove();
        updateCount();
    };


    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";

    updateCount();
}


// Update task count
function updateCount() {

    let count = document.getElementById("count");

    count.textContent = "Total Tasks: " + taskList.children.length;

}
