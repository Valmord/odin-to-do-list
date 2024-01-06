import Task from "./task";
import { taskStorage } from "./task-storage";

const resetBtn = document.querySelector('.reset-task-btn')
const cancelBtn = document.querySelector('.cancel-task-btn');
const modal = document.querySelector('.modal-add-task');
const form = document.querySelector('.modal-add-task > form');

export function addTaskListeners(){
    resetBtnListener();
    cancelBtnListener();
    outsideOfFormListener();
    formSubmitListener();




}

const formSubmitListener = () => {
    const title = document.querySelector('#add-task-title');
    const dueDate = document.querySelector('#add-task-due-date');
    const notes = document.querySelector('#add-task-notes'); 
    const currentList = document.querySelector('.current-list');
    form.addEventListener('submit', e => {
        e.preventDefault();
        taskStorage.addTask(currentList.dataset.index, new Task(title.value,dueDate.value,notes.value));
        form.reset();
    })
}

const outsideOfFormListener = () => {
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