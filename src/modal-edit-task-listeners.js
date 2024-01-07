import { taskStorage } from "./task-storage";
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
    const cancelBtn = () => {
        const modal = document.querySelector('.modal-edit-task');
        console.log(modal);
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

            taskStorage.updateTask(
                document.querySelector('.current-list').dataset.index,
                modal.dataset.index,
                newTaskFromModal());
            displayListItems.showPage();
        })
    }

    const init = () => {
        cancelBtn();
        formSubmit();
    }

    return { init };
})();


