window.addEventListener("load", () => {
    const container = document.querySelector(".container");
    const input = document.querySelector("#input-new-task");
    const list = document.querySelector("#tasks");
    const add = document.querySelector("#add");

    add.addEventListener("click", () => {
        const task = input.value;
        if (!task) {
            alert("Please fill in a task");
            return;
        }

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskContent = document.createElement("div");
        taskContent.classList.add("content");

        taskElement.appendChild(taskContent);

        const taskInput = document.createElement("input");
        taskInput.classList.add("text");
        taskInput.type = "text";
        taskInput.value = task;
        taskInput.setAttribute("readonly", "readonly");
        taskContent.appendChild(taskInput);

        const taskActions = document.createElement("div");
        taskActions.classList.add("actions");

        const taskEdit = document.createElement("button");
        taskEdit.classList.add("edit", "hvr-shrink");
        taskEdit.innerHTML = "Edit";

        const taskDelete = document.createElement("button");
        taskDelete.classList.add("delete", "hvr-shrink");
        taskDelete.innerHTML = '<i class="far fa-trash-alt"></i>';

        taskActions.appendChild(taskEdit);
        taskActions.appendChild(taskDelete);

        taskElement.appendChild(taskActions);

        list.appendChild(taskElement);

        input.value = "";

        taskEdit.addEventListener("click", () => {
            if (taskEdit.innerHTML == "Edit") {
                taskInput.removeAttribute("readonly", "readonly");
                taskInput.focus();
                taskEdit.innerHTML = "Save";
            } else {
                taskInput.setAttribute("readonly", "readonly");
                taskEdit.innerHTML = "Edit";
            }
        });

        taskDelete.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this task")) {
                list.removeChild(taskElement);
            }
        });
    });
});

// let add = document.querySelector("#add");
// let taskInput = document.querySelector("#newtask input");
// let tasks = document.querySelector("#tasks");

// add.onclick = function() {
//     if (taskInput.value.length == 0) {
//         alert("Please Enter a Task");
//     } else {
//         tasks.innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${taskInput.value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for (var i = 0; i < current_tasks.length; i++) {
//             current_tasks[i].onclick = function() {
//                 this.parentNode.remove();
//             };
//         }
//     }
// };