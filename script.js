// assigned-task-counter
// completed-task-counter
// task-done-btn


const completedButtons = document.getElementsByClassName('completed-btn');
const assignedTaskCounter = document.getElementById('assigned-task-counter');
const completedTaskCounter = document.getElementById('completed-task-counter');


for (button of completedButtons) {
    button.addEventListener('click', function (e) {

        alert('Task Completed!');
        e.target.setAttribute('disabled', 'true');
        e.target.style.backgroundColor = 'gray';
        e.target.style.cursor = 'no-drop';
        let assignedTasks = parseInt(assignedTaskCounter.innerHTML);
        let completedTasks = parseInt(completedTaskCounter.innerHTML);


        if (assignedTasks === 1) {
            alert('All Tasks Completed!');
            assignedTaskCounter.innerHTML = assignedTasks - 1;
            completedTaskCounter.innerHTML = completedTasks + 1;

        }

        else if (assignedTasks > 0) {

            assignedTaskCounter.innerHTML = assignedTasks - 1;
            completedTaskCounter.innerHTML = completedTasks + 1;
        }

    });
}