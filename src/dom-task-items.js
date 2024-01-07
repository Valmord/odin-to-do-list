import { taskStorage } from "./task-storage";

export const taskGridItem = (function () {
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
