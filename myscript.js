// Get the DOM elements
const taskInput = document.querySelector("#task");
const addBtn = document.querySelector("#add");
const todosDiv = document.querySelector("#todos");

// Add event listener to the "Add Task" button
addBtn.addEventListener("click", () => {
    // Get the task from the input field
    const task = taskInput.value;

    // Create a new list item for the task
    const li = document.createElement("li");
    li.textContent = task;

    // Create a "Remove" button for the task
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove");
    removeBtn.addEventListener("click", () => {
        // Remove the task from the list when the "Remove" button is clicked
        li.remove();
    });

    // Append the "Remove" button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the "todos" div
    todosDiv.appendChild(li);

    // Clear the input field
    taskInput.value = "";
});

