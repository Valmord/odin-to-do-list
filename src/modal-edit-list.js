import { siteStorage } from "./storage";

export const editListModal = (() => {
    const createModalHeader = () => {
        const header = document.createElement('h2');
        header.textContent = 'Edit List';
        return header;
    }

    const createModalListTitle = (list) => {
        const title = document.createElement('input');
        title.type = 'text';
        title.name = 'edit-list-title';
        title.classList.add('edit-task-title');
        title.value = list.title;
        title.maxLength = "25";
        return title;
    }

    const createModalButtons = () => {
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('add-list-btns','btn-container');

        const saveBtn = document.createElement('button');
        saveBtn.type = 'submit';
        saveBtn.textContent = 'Save Changes';
        saveBtn.classList.add('edit-list-save-btn');

        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.classList.add('edit-list-cancel-btn');

        const deleteListBtn = document.createElement('button');
        deleteListBtn.type = 'button';
        deleteListBtn.textContent = 'Delete List';
        deleteListBtn.classList.add('delete-list-btn');

        btnContainer.appendChild(saveBtn);
        btnContainer.appendChild(deleteListBtn);
        btnContainer.appendChild(cancelBtn);

        return btnContainer;
        }

    const createModal = (listIndex) => {
        const list = siteStorage.getLists()[listIndex];
        const modal = document.querySelector('.modal-edit-list');
        modal.textContent = '';
        modal.classList.add('modal-shown');
        modal.dataset.index = listIndex;
        const form = document.createElement('form');
        form.appendChild(createModalHeader());
        form.appendChild(createModalListTitle(list));
        form.appendChild(createModalButtons());
        modal.appendChild(form);
    }

    return { createModal };
})();