import { displayListItems } from "./dom-display";
import Task from "./task";
import { taskStorage } from "./task-storage";

export function addTaskListeners(){
    resetBtnListener();
    cancelBtnListener();
    outsideFormListener();
    formSubmitListener();
}

const resetBtn = document.querySelector('.reset-task-btn')
const cancelBtn = document.querySelector('.cancel-task-btn');
const modal = document.querySelector('.modal-add-task');
const form = document.querySelector('.modal-add-task > form');

const formSubmitListener = () => {
    const title = document.querySelector('#add-task-title');
    const dueDate = document.querySelector('#add-task-due-date');
    const notes = document.querySelector('#add-task-notes'); 
    form.addEventListener('submit', e => {
        const currentList = document.querySelector('.current-list');
        e.preventDefault();
        taskStorage.addTask(currentList.dataset.index, new Task(title.value,dueDate.value,notes.value));
        form.reset();
        displayListItems.showPage(currentList.dataset.index);
    })
}

const outsideFormListener = () => {
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.classList.remove('modal-shown');
    })
}

const cancelBtnListener = () => {
    cancelBtn.addEventListener('click', () => {
        form.reset(); // only child is the form.
        modal.classList.remove('modal-shown');
    })
}

const resetBtnListener = () => {
    resetBtn.addEventListener('click', form.reset());
}