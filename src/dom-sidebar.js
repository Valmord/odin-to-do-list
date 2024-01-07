import { displayListItems } from "./dom-display";

export const sidebarListeners = (() => {
    const addTaskListener = () => {
        const taskElement = document.querySelector('.add-task');
        const addTaskModal = document.querySelector('.modal-add-task');
        taskElement.addEventListener('click', () => {
            addTaskModal.classList.add('modal-shown');
        })
    }
    
    const addListListener = () => {
        const newListBtn = document.querySelector('.new-list');
        const addListModal = document.querySelector('.modal-add-list');
        newListBtn.addEventListener('click', () => {
            addListModal.classList.add('modal-shown');
        })
    }

    const changeList = (newIndex) => {
        if (document.querySelector('.current-list').dataset.index === newIndex) return;
        const listArr = document.querySelectorAll('.list-container > p');
        listArr.forEach( list => {
            if (list.dataset.index === newIndex) {
                list.classList.add('current-list');
            } else {
                list.classList.remove('current-list')
            } 
        });
    }

    const changingListListeners = () => {
        const listArr = document.querySelectorAll('.list-container > p');
        listArr.forEach( item => {
            item.addEventListener('click', () => {
                changeList(item.dataset.index);
                displayListItems.showPage(item.dataset.index); 
            })
        })
    }

    const init = () => {
        addTaskListener();
        addListListener();
        changingListListeners();
    }
    return { init, changingListListeners }
})()