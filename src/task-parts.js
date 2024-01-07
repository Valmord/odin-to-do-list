import { taskPartListeners } from "./modal-add-task-listeners";

export const resetTaskParts = () => {
    const partsContainer = document.querySelector('.task-parts-container');
    partsContainer.textContent = '';
    partsContainer.appendChild(createNewTaskPart());
    taskPartListeners();
}

export const removeLastTaskPart = () => {
    const partsContainer = document.querySelector('.task-parts-container');
    const parts = document.querySelectorAll('.task-parts');
    const lastChild = parts[parts.length-1];
    partsContainer.removeChild(lastChild);
}

export const createNewTaskPart = () => {
    const partContainer = document.createElement('div');
    const span = document.createElement('span');
    const part = document.createElement('input');
    const currentPartCount = document.querySelectorAll('.task-parts').length;
    part.type = "text";
    part.name = `task-part-${currentPartCount+1}`;
    part.classList.add('task-parts', 'part-empty');
    part.dataset.index = currentPartCount+1;
    span.classList.add(`task-part-span-${currentPartCount+1}`);
    partContainer.appendChild(span);
    partContainer.appendChild(part);
    return partContainer;
}