import { displayListItems, displaySidebarLists } from "./dom-display";
import { sidebarListeners } from "./dom-sidebar-listeners";
import { taskStorage } from "./task-storage";
import TaskList from "./tasklist";


const cancelBtn = document.querySelector('.cancel-list-btn');
const form = document.querySelector('.modal-add-list > form');
const modal = document.querySelector('.modal-add-list');

export function addListListeners(){
        cancelBtnListener();
        formSubmitListener();
        outsideFormListener();
}

const cancelBtnListener = () => {
    cancelBtn.addEventListener('click', () => {
        form.reset();
        modal.classList.remove('modal-shown');
    })
}

const formSubmitListener = () => {
    const title = document.querySelector('#add-list-title');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const newListIndex = taskStorage.addList(new TaskList(title.value));
        modal.classList.remove('modal-shown');
        form.reset();
        
        displaySidebarLists(newListIndex);
        displayListItems.showPage(newListIndex);
        sidebarListeners.changingListListeners();
    })
}

const outsideFormListener = () => {
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.classList.remove('modal-shown');
    })
} 