import { taskGridItem } from "./dom-task-items";
import { siteStorage } from "./storage";
import { createNewTaskPart } from "./task-parts";
import { taskItemListeners } from "./dom-task-item-listeners";

export const displayListItems = (() => {
    function showPage(listIndex = 0 ){
        if (!siteStorage.getLists().length) return;
        showListTitle(listIndex);
        showTaskItems(listIndex);
        taskItemListeners.init();
    }

    function showListTitle(taskListIndex){
        const mainTitle = document.querySelector('main h1');
        mainTitle.textContent = `${siteStorage.getLists()[taskListIndex].title} (${
        siteStorage.getTasks(taskListIndex).length} tasks)`;
    }
    
    
    function showTaskItems(taskListIndex){
        const tasksContainer = document.querySelector('.tasks-container');
        tasksContainer.textContent = '';
        const taskItems = siteStorage.getTasks(taskListIndex);
        if (!taskItems || taskItems.length === 0) {
            displayNoTasks();
            return;
        }
    
        taskItems.forEach((item, index) => {
            const taskItem = taskGridItem.create(item, index);
            tasksContainer.appendChild(taskItem);
            
        })
    }
    
    function displayNoTasks(){
        const tasksContainer = document.querySelector('.tasks-container');
        const header = document.createElement('h1');
        header.textContent = 'No items to show ☻ Add one?';
        header.classList.add('no-items');

        const addIcon = document.createElement('img');
        addIcon.src = './images/plus-box-outline.svg';
        header.appendChild(addIcon);

        tasksContainer.appendChild(header);
    }

    return { showPage }
})();

export function displaySidebarLists(listIndex = 0) {
    const sidebarList = document.querySelector('.list-container');
    sidebarList.textContent = '';
    const lists = siteStorage.getLists();
    lists.forEach( (list, index) => {
        const item = document.createElement('p');
        item.textContent = list.title;
        item.dataset.index = index;
        if (index === listIndex) item.classList.add('current-list');
        sidebarList.appendChild(item);
    })
}

export const displayNewTaskPart = () => {
    const partsContainer = document.querySelector('.task-parts-container');
    partsContainer.appendChild(createNewTaskPart());
}

export const displayUserName = () => {
    const userElement = document.querySelector('.user-profile > span');
    userElement.textContent = siteStorage.getUserName();
}