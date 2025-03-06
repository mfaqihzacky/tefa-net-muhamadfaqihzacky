const apiUrl = "https://localhost:4000/api/clients"; 

$(document).ready(function () {
    loadTasks();

    $("#openTaskModal").click(function () {
        openTaskModal();
    });

    $("#saveTask").click(function () {
        saveTask();
    });
});

function loadTasks() {
    $.ajax({
        url: apiUrl,
        type: "GET",
        success: function (tasks) {
            let groupedTasks = groupTasksByDate(tasks);
            displayTasks(groupedTasks);
        },
        error: function () {
            alert("Gagal mengambil data tasks!");
        }
    });
}

function displayTasks(groupedTasks) {
    let html = "";
    for (let date in groupedTasks) {
        html += `<h2 class="text-lg font-semibold mt-6">${date}</h2>`;
        groupedTasks[date].forEach(task => {
            html += `
                <div class="p-4 bg-gray-700 rounded mb-2">
                    <div class="flex justify-between items-center">
                        <div>
                            <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${task.id})">
                            <span class="${task.completed ? 'line-through text-gray-400' : ''} font-semibold">${task.title}</span>
                        </div>
                        <div>
                            <button onclick="editTask(${task.id})" class="text-yellow-400 mr-2">✏️</button>
                            <button onclick="deleteTask(${task.id})" class="text-red-400">🗑</button>
                        </div>
                    </div>
                    <p class="text-sm text-gray-300 mt-1">${task.description || "No description"}</p>
                </div>
            `;
        });
    }
    $("#tasksContainer").html(html);
}

function groupTasksByDate(tasks) {
    let grouped = {};
    tasks.forEach(task => {
        let date = formatDate(task.createdAt);
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push(task);
    });
    return grouped;
}

function formatDate(dateString) {
    let date = new Date(dateString);
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function openTaskModal(task = null) {
    if (task) {
        $("#modalTitle").text("Edit Task");
        $("#taskId").val(task.id);
        $("#taskTitle").val(task.title);
        $("#taskDescription").val(task.description);
        $("#taskDate").val(formatDate(task.createdAt)); 
    } else {
        $("#modalTitle").text("Add Task");
        $("#taskId").val("");
        $("#taskTitle").val("");
        $("#taskDescription").val("");
        $("#taskDate").val("");
    }
    $("#taskModal").removeClass("hidden");
}

function formatDateForInput(dateString) {
    let date = new Date(dateString);
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
}

function editTask(id) {
    $.ajax({
        url: `${apiUrl}/${id}`,
        type: "GET",
        success: function (task) {
            openTaskModal(task);
        },
        error: function () {
            alert("Gagal mengambil data task!");
        }
    });
}

function saveTask() {
    let id = $("#taskId").val();
    let taskData = {
        title: $("#taskTitle").val(),
        description: $("#taskDescription").val(),
        createdAt: $("#taskDate").val(),
    };

    let method = id ? "PUT" : "POST";
    let url = id ? `${apiUrl}/${id}` : apiUrl;

    $.ajax({
        url: url,
        type: method,
        contentType: "application/json",
        data: JSON.stringify(taskData),
        success: function () {
            closeTaskModal();
            loadTasks();
        },
        error: function (xhr) {
            alert("Gagal menyimpan data! " + xhr.responseText);
        }
    });
}

function deleteTask(id) {
    if (!confirm("Are you sure?")) return;
    $.ajax({
        url: `${apiUrl}/${id}`,
        type: "DELETE",
        success: function () {
            loadTasks();
        },
        error: function () {
            alert("Gagal menghapus task!");
        }
    });
}

function toggleTask(id) {
    let checkbox = $(`input[type=checkbox][onclick="toggleTask(${id})"]`);
    let taskText = checkbox.next("span");

    let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || {}; 

    if (checkbox.prop("checked")) {
        taskText.addClass("line-through text-gray-400");
        completedTasks[id] = true; 
    } else {
        taskText.removeClass("line-through text-gray-400");
        delete completedTasks[id];
    }

    localStorage.setItem("completedTasks", JSON.stringify(completedTasks)); 
}

function displayTasks(groupedTasks) {
    let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || {};

    let html = "";
    for (let date in groupedTasks) {
        html += `<h2 class="text-lg font-semibold mt-6">${date}</h2>`;
        groupedTasks[date].forEach(task => {
            let isChecked = completedTasks[task.id] ? "checked" : "";
            let textClass = completedTasks[task.id] ? "line-through text-gray-400" : "";

            html += `
                <div class="p-4 bg-gray-700 rounded mb-2">
                    <div class="flex justify-between items-center">
                        <div>
                            <input type="checkbox" ${isChecked} onclick="toggleTask(${task.id})">
                            <span class="${textClass} font-semibold">${task.title}</span>
                        </div>
                        <div>
                            <button onclick="editTask(${task.id})" class="text-yellow-400 mr-2">✏️</button>
                            <button onclick="deleteTask(${task.id})" class="text-red-400">🗑</button>
                        </div>
                    </div>
                    <p class="text-sm text-gray-300 mt-1">${task.description || "No description"}</p>
                </div>
            `;
        });
    }
    $("#tasksContainer").html(html);
}


function closeTaskModal() {
    $("#taskModal").addClass("hidden");
}
