const completedButtons = document.getElementsByClassName('completed-btn');
const assignedTaskCounter = document.getElementById('assigned-task-counter');
const completedTaskCounter = document.getElementById('completed-task-counter');
const historyItemsContainer = document.getElementById('history-items-container');
const clearHistoryBtn = document.getElementById('history-btn');
const themeButton = document.getElementById('theme-btn');
const discoverPageBtn = document.getElementById('discover-btn');
const backHomeBtn = document.getElementById('back-home-btn');





// completed button functionality 

for (button of completedButtons) {
    button.addEventListener('click', function (e) {
        alert('Task Completed!');

        e.target.setAttribute('disabled', 'true');
        e.target.style.backgroundColor = 'gray';
        e.target.style.cursor = 'no-drop';
        let assignedTasks = parseInt(assignedTaskCounter.innerHTML);
        let completedTasks = parseInt(completedTaskCounter.innerHTML);

        
        const selectedCard = e.target.parentElement.parentElement;
        const cardTitle = selectedCard.querySelector('.task-title').innerHTML;
        const newHistory = document.createElement('p');
        newHistory.innerText='You have completed the task '+cardTitle;
        newHistory.classList.add('history-item')
        historyItemsContainer.appendChild(newHistory);

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

// clear history btn functionality 

if(clearHistoryBtn){

    clearHistoryBtn.addEventListener('click',function(e){
        if(historyItemsContainer){
            historyItemsContainer.innerHTML='';
        }
    })
}

// theme button functionality 
if(themeButton){
    themeButton.addEventListener('click',function(e){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor='#'+randomColor;
    })
}



// page navigation functionality 
if(discoverPageBtn){
    discoverPageBtn.addEventListener('click',function(){
        window.location.href='./new.html';
    });
}

if(backHomeBtn){
    backHomeBtn.addEventListener('click',function(){
        window.location.href='./index.html';
    });
}

