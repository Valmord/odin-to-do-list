

export const createSidebarListItem = (listIndex, list, index) => {
    const item = document.createElement('p');
    item.textContent = list.title;
    item.dataset.index = index;
    if (index === listIndex) item.classList.add('current-list');

    const editListIcon = document.createElement('img');
    editListIcon.src = './images/note-edit-outline.svg';
    editListIcon.classList.add(`list-edit-item-${index}`);
    editListIcon.dataset.index = index;

    item.appendChild(editListIcon);

    return item;
}
