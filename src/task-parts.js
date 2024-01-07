import { taskPartListeners } from "./modal-add-task";

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
    const part = document.createElement('input');
    const currentPartCount = document.querySelectorAll('.task-parts').length;
    part.type = "text";
    part.name = `task-part-${currentPartCount+1}`;
    part.classList.add('task-parts', 'part-empty');
    part.dataset.index = currentPartCount+1;
    return part;
}