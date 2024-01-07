import { alterTableStatus, updateTaskItemPartCompleteDisplay } from "./dom-task-items";
import { editTaskModal } from "./modal-edit-task";
import { editTaskModalListener } from "./modal-edit-task-listeners";
import { siteStorage } from "./storage";




export const taskItemListeners = (() => {
    const addTaskItemListener = () => {
        const taskItems = document.querySelectorAll('.task-item');
        taskItems.forEach(taskItem => {
            const currentListIndex = +document.querySelector('.current-list').dataset.index;
            const taskItemLength = siteStorage.getTasks(currentListIndex)[taskItem.dataset.index].parts.length;
            if (taskItemLength === 0 ) return;
            taskItem.addEventListener('mouseenter', () => {
                const partsTable = document.querySelector(
                    `.table-${taskItem.dataset.index}`);
                partsTable.classList.remove('hidden');
            });
            taskItem.addEventListener('mouseleave', () => {
                const partsTable = document.querySelector(
                    `.table-${taskItem.dataset.index}`);
                partsTable.classList.add('hidden');
            });
        });
    } 
    
    const addEditTaskListeners = () => {
        const editIcons = document.querySelectorAll('.edit-task-icon');
        editIcons.forEach( icon => {
            icon.addEventListener('click', () => {
                const currentList = document.querySelector('.current-list');
                editTaskModal.createModal(icon.dataset.index, 
                    siteStorage.getTasks(currentList.dataset.index)[icon.dataset.index]);
                    editTaskModalListener.init();
            })
        });
    }

    const clickTaskItemListener = () => {
        const taskItems = document.querySelectorAll('.task-item');
        taskItems.forEach(item => {
            item.addEventListener('click', () => {
                const currentListIndex = +document.querySelector('.current-list').dataset.index;
                const taskItemLength = siteStorage.getTasks(currentListIndex)[item.dataset.index].parts.length;
                if (taskItemLength > 0 ) {
                    const table = document.querySelector(`.table-${item.dataset.index}`);
                    table.classList.toggle('table-shown');
                }
                item.classList.toggle('show-wrap');
            })
        })
    }



    const markCompletedListener = () => {
        const items = document.querySelectorAll('.part-item-status-checkbox');
        items.forEach( item => {
            item.addEventListener('click', e => {
                e.stopPropagation();
                if (item.textContent === '☐') {
                    item.textContent = '☑';
                    item.classList.add('completed-part');
                    alterTableStatus(item.dataset.itemIndex, item.dataset.index, true);
                } else if (item.textContent === '☑') {
                    item.textContent = '☐';
                    item.classList.remove('completed-part');
                    alterTableStatus(item.dataset.itemIndex, item.dataset.index, false);                    
                }
                const currentListIndex = +document.querySelector('.current-list').dataset.index;
                const taskItem = siteStorage.getTasks(currentListIndex)[item.dataset.itemIndex];
                updateTaskItemPartCompleteDisplay(taskItem);
            })
        })
    }

    const noItemAddTaskListener = () => {
        const noItemTaskIcon = document.querySelector('.no-items img');
        if (noItemTaskIcon) {
            const addTaskModal = document.querySelector('.modal-add-task');
            noItemTaskIcon.addEventListener('click', () => {
                addTaskModal.classList.add('modal-shown');
            })
        }
    }

    const init = () => {
        addTaskItemListener();
        addEditTaskListeners();
        clickTaskItemListener();
        markCompletedListener();
        noItemAddTaskListener();
    }

    return { addTaskItemListener, addEditTaskListeners, init}
})()