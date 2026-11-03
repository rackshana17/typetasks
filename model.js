"use strict";
let nextId = 1;
// 3. addTask function
function addTask(tasks, title) {
    const newTask = { id: nextId++, title, status: "todo" };
    return [...tasks, newTask];
}
// 4. completeTask function
function completeTask(tasks, id) {
    return tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t));
}
// 5. filterByStatus function
function filterByStatus(tasks, status) {
    return tasks.filter((t) => t.status === status);
}
// 6. Extra operation (Make It Yours requirement)
function deleteTask(tasks, id) {
    return tasks.filter((t) => t.id !== id);
}
