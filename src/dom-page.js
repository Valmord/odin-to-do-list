import { taskStorage } from "./task-storage";

const taskGridItem = (function () {
    const createTaskContainer = (listIndex) => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add(`task-item`);
        taskContainer.dataset.index = listIndex;
        return taskContainer;
    }

    const createTaskTitle = (taskItem) => {
        const taskHeader = document.createElement('h4');
        taskHeader.textContent = taskItem.title;
        return taskHeader;
    }

    const createTaskNotes = (taskItem) => {
        const taskNotes = document.createElement('p');
        taskNotes.textContent = taskItem.notes;
        return taskNotes;
    }

    const createtaskTasks = () => {

    } 


    function create(taskItem, index){
        const taskContainer = createTaskContainer(index);
        taskContainer.appendChild(createTaskTitle(taskItem));
        taskContainer.appendChild(createTaskNotes(taskItem));
        return taskContainer;
    }
    
    return { create };
})();

export function showTaskItems(taskListIndex){
    const tasksContainer = document.querySelector('.tasks-container');
    tasksContainer.textContent = '';
    const taskItems = taskStorage.getTasks(taskListIndex);
    console.log(taskItems);
    if (!taskItems) {
        displayNoTasks(taskContainer);
        return;
    }


    taskItems.forEach((item, index) => {
        console.log(item);
        const taskItem = taskGridItem.create(item, index);
        console.dir(taskItem);
        tasksContainer.appendChild(taskItem);
        
    })
}

export function displayNoTasks(){
    const tasksContainer = document.querySelector('.tasks-container');
    const header = document.createElement('h1');
    header.textContent = 'No items to show :) Add one?';
    header.classList.add('no-items');
    tasksContainer.appendChild(header);
}