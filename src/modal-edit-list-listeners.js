import { loadSite } from "./load-site";
import { siteStorage } from "./storage";


export const modalEditListListeners = (() => {
    const deleteListBtn = (modal, listIndex) => {
        
        const deleteBtn = document.querySelector('.delete-list-btn');
        deleteBtn.addEventListener('click', () => {
            if (siteStorage.getLists().length === 1) {
                alert('Cannot have less than 1 list');
            } else {
                siteStorage.deleteList(listIndex);
                loadSite.refreshPage(0);
                modal.classList.remove('modal-shown');
            }
        })
    }

    const cancelBtn = (modal) => {
        const cancelBtn = document.querySelector('.edit-list-cancel-btn');
        cancelBtn.addEventListener('click', () => {
            modal.classList.remove('modal-shown');
        })
    }
    
    const formSubmit = (modal, listIndex) => {
        const form = document.querySelector('.modal-edit-list form');
        
        form.addEventListener('submit', e => {
            e.preventDefault();
            modal.classList.remove('modal-shown');

            siteStorage.updateList(
                listIndex,
                document.querySelector('.edit-task-title').value);
            loadSite.refreshPage(listIndex);
        })
    }

    const init = () => {
        const modal = document.querySelector('.modal-edit-list');
        const listIndex = +modal.dataset.index;
        cancelBtn(modal);
        deleteListBtn(modal, listIndex);
        formSubmit(modal, listIndex);
    }

    return { init };
})();