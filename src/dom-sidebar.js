import { todoStorage } from "./todo-storage";

export function populateSidebarList(listIndex = 0) {
    const sidebarList = document.querySelector('.list-container');
    sidebarList.textContent = '';
    const lists = todoStorage.getLists();
    lists.forEach( (list, index) => {
        const item = document.createElement('p');
        item.textContent = list.title;
        item.dataset.index = index;
        if (index === listIndex) item.classList.add('current-list');
        sidebarList.appendChild(item);
        listsListeners();
        addTaskListener();
    })
}

function listsListeners() {
    const listArr = document.querySelectorAll('.list-container > p');
    listArr.forEach( item => {
        item.addEventListener('click', () => {
            populateSidebarList(parseInt(item.dataset.index));
        })
    })
}

function addTaskListener(){
    const taskElement = document.querySelector('.add-task');
    const addTaskModal = document.querySelector('.modal-add-task');
    console.log(taskElement, addTaskModal);
    taskElement.addEventListener('click', () => {
        addTaskModal.classList.add('modal-shown');
    })
}