import { siteStorage } from "./storage";

export const editTaskModal = (() => {
    const createModalHeader = (taskItem) => {
        const header = document.createElement('input');
        header.type = 'text';
        header.name = 'edit-task-header';
        header.classList.add('edit-task-header');
        header.value = taskItem.title;
        return header;
    }

    const createModalDueDate = (taskItem) => {
        const label = document.createElement('label');
        label.textContent = 'Due Date:';
        const dueDate = document.createElement('input');
        dueDate.type = 'datetime-local';
        dueDate.name = 'edit-task-duedate';
        dueDate.classList.add('edit-task-duedate');
        dueDate.value = taskItem.dueDate;
        label.appendChild(dueDate);
        return label;
    }

    const createModalNotes = (taskItem) => {
        const label = document.createElement('label');
        label.textContent = 'Notes:';
        label.classList.add('edit-task-notes-label');
        const notes = document.createElement('textarea');
        notes.name = 'edit-task-notes';
        notes.value = taskItem.notes;
        notes.rows = 10;
        label.appendChild(notes);
        return label;
    }

    const createModalItems = (taskItem) => {
        const list = document.createElement('ol');
        list.textContent = "Task Parts: ";
        taskItem.parts.forEach( (part,index) => {
            const listItem = document.createElement('li');
            const partItem = document.createElement('input');
            listItem.appendChild(partItem);
            partItem.type = 'text';
            partItem.name = `edit-task-part-${index}`;
            partItem.classList.add('edit-task-parts');
            partItem.value = part;
            list.appendChild(listItem);
        })
        return list;
    }

    const createModalButtons = () => {
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('add-list-btns','btn-container');

        const saveBtn = document.createElement('button');
        saveBtn.type = 'submit';
        saveBtn.textContent = 'Save Changes';
        saveBtn.classList.add('edit-task-save-btn');

        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.classList.add('edit-task-cancel-btn');

        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.type = 'button';
        deleteTaskBtn.textContent = 'Delete Task';
        deleteTaskBtn.classList.add('delete-task-btn');

        btnContainer.appendChild(saveBtn);
        btnContainer.appendChild(deleteTaskBtn);
        btnContainer.appendChild(cancelBtn);

        return btnContainer;
        }

    const createModal = (taskIndex, taskItem) => {
        const currentListIndex = document.querySelector('.current-list').dataset.index;
        const modal = document.querySelector('.modal-edit-task');
        modal.textContent = '';
        modal.classList.add('modal-shown');
        modal.dataset.index = taskIndex;
        const form = document.createElement('form');
        form.appendChild(createModalHeader(taskItem));
        form.appendChild(createModalDueDate(taskItem));
        form.appendChild(createModalNotes(taskItem));

        const partsArrayLength = siteStorage.getTasks(currentListIndex)[+taskIndex].parts.length;
        if (partsArrayLength) form.appendChild(createModalItems(taskItem));
        form.appendChild(createModalButtons());
        modal.appendChild(form);
    }

    return { createModal };
})();