document.getElementById('task-form').addEventListener('submit', function(e){
    e.preventDefault();

    // Get the task value
    let task = document.getElementById('task-input').value;
    if (task.trim() === '') return; // No empty tasks

    // Add the task to the list
    let tasksList = document.getElementById('tasks-list');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    tasksList.appendChild(li);

    // Clear the input
    document.getElementById('task-input').value = '';
});
