import { taskGridItem } from "./dom-task-items";
import { taskStorage } from "./task-storage";

export const displayListItems = (() => {
    function showPage(listIndex = 0 ){
        if (!taskStorage.getLists().length) return;
        showListTitle(listIndex);
        showTaskItems(listIndex);
    }

    function showListTitle(taskListIndex){
        const mainTitle = document.querySelector('main h1');
        mainTitle.textContent = taskStorage.getLists()[taskListIndex].title;
    }
    
    
    function showTaskItems(taskListIndex){
        const tasksContainer = document.querySelector('.tasks-container');
        tasksContainer.textContent = '';
        const taskItems = taskStorage.getTasks(taskListIndex);
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
        header.textContent = 'No items to show :) Add one?';
        header.classList.add('no-items');
        tasksContainer.appendChild(header);
    }

    return { showPage }
})();

export function displaySidebarLists(listIndex = 0) {
    const sidebarList = document.querySelector('.list-container');
    sidebarList.textContent = '';
    const lists = taskStorage.getLists();
    lists.forEach( (list, index) => {
        const item = document.createElement('p');
        item.textContent = list.title;
        item.dataset.index = index;
        if (index === listIndex) item.classList.add('current-list');
        sidebarList.appendChild(item);
    })
}
