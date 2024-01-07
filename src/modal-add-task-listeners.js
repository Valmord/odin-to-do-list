import { displayListItems, displayNewTaskPart } from "./dom-display";
import Task from "./task";
import { removeLastTaskPart, resetTaskParts } from "./task-parts";
import { siteStorage } from "./storage";
import { loadSite } from "./load-site";

export function addTaskListeners(){
    resetBtnListener();
    cancelBtnListener();
    outsideFormListener();
    formSubmitListener();
    taskPartListeners();
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
        e.preventDefault();
        const currentList = document.querySelector('.current-list');
        let partsArray = [];
        document.querySelectorAll('.task-parts').forEach(part => {
            if (part.value != '') partsArray.push(part.value);
        } );
        siteStorage.addTask(currentList.dataset.index, new Task(title.value,dueDate.value,notes.value,partsArray));
        form.reset();
        resetTaskParts();
        loadSite.refreshPage(+currentList.dataset.index);
        // displayListItems.showPage(+currentList.dataset.index);
    })
}

const outsideFormListener = () => {
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.classList.remove('modal-shown');
    })
}

const cancelBtnListener = () => {
    cancelBtn.addEventListener('click', () => {
        form.reset();
        modal.classList.remove('modal-shown');
        resetTaskParts();
    })
}

const resetBtnListener = () => {
    resetBtn.addEventListener('click', () => {
        form.reset()
        resetTaskParts();
    });
}

export const taskPartListeners = () => {
    let parts = document.querySelectorAll('.task-parts');
    parts.forEach( part => {
        part.addEventListener('input', () => {
            if (part.value) part.classList.remove('part-empty');
            parts = document.querySelectorAll('.task-parts');   
            if (parts.length === parseInt(part.dataset.index)) {
                document.querySelector(`.task-part-span-${part.dataset.index}`)
                .textContent = part.dataset.index;    
                displayNewTaskPart();
                taskPartListeners();
            }
        })
        part.addEventListener('change', () => {
            parts = document.querySelectorAll('.task-parts');
            if (part.value === '' && parseInt(part.dataset.index)+1 === parts.length) {
                removeLastTaskPart();
                part.classList.add('part-empty')
                document.querySelector(`.task-part-span-${part.dataset.index}`).textContent = '';
            }
        })
    })
}