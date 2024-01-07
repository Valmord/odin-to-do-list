import { siteStorage } from "./storage";
import Task from "./task";
import { displayListItems } from "./dom-display";

const newTaskFromModal = () => {
    const title = document.querySelector('.edit-task-header').value;
    const dueDate = document.querySelector('.edit-task-duedate').value;
    const notes = document.querySelector('.edit-task-notes-label textarea').value;
    const partsArr = [];
    document.querySelectorAll('.edit-task-parts').forEach( node => {
        partsArr.push(node.value);
    });

    const task = new Task(title, dueDate, notes, partsArr);
    return task;
}



export const editTaskModalListener = (() => {
    const deleteTaskBtn = () => {
        
        const deleteBtn = document.querySelector('.delete-task-btn');
        deleteBtn.addEventListener('click', () => {
            const modal = document.querySelector('.modal-edit-task');
            const currentListIndex = +document.querySelector('.current-list').dataset.index;
            siteStorage.deleteTask(currentListIndex, +modal.dataset.index);
            displayListItems.showPage(currentListIndex);
            modal.classList.remove('modal-shown');
        })
    }


    const cancelBtn = () => {
        const modal = document.querySelector('.modal-edit-task');
        const cancelBtn = document.querySelector('.edit-task-cancel-btn');
        cancelBtn.addEventListener('click', () => {
            modal.classList.remove('modal-shown');
        })
    }
    
    const formSubmit = () => {
        const modal = document.querySelector('.modal-edit-task');
        const form = document.querySelector('.modal-edit-task form');
        
        form.addEventListener('submit', e => {
            e.preventDefault();
            modal.classList.remove('modal-shown');
            const currentListIndex = +document.querySelector('.current-list').dataset.index;

            siteStorage.updateTask(
                currentListIndex,
                modal.dataset.index,
                newTaskFromModal());
            displayListItems.showPage(currentListIndex);
        })
    }

    const init = () => {
        cancelBtn();
        deleteTaskBtn();
        formSubmit();
    }

    return { init };
})();


