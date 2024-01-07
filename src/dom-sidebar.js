import { taskStorage } from "./task-storage";

export function populateSidebarList(listIndex = 0) {
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

    listsListeners();
    addTaskListener();
    addListListener();
}

function listsListeners() {
    const listArr = document.querySelectorAll('.list-container > p');
    listArr.forEach( item => {
        item.addEventListener('click', () => {
            listArr.forEach( list => list.classList.remove('current-list'));
            item.classList.add('current-list');
        })
    })
}

function addTaskListener(){
    const taskElement = document.querySelector('.add-task');
    const addTaskModal = document.querySelector('.modal-add-task');
    taskElement.addEventListener('click', () => {
        addTaskModal.classList.add('modal-shown');
    })
}

function addListListener(){
    const newListBtn = document.querySelector('.new-list');
    const addListModal = document.querySelector('.modal-add-list');
    newListBtn.addEventListener('click', () => {
        addListModal.classList.add('modal-shown');
    })
}