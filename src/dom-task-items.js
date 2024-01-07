import { format } from "date-fns";
import { siteStorage } from "./storage";

export const taskGridItem = (function () {
    const createTaskContainer = (listIndex, taskItem) => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add(`task-item`, taskItem.priority);
        taskContainer.dataset.index = listIndex;
        return taskContainer;
    }

    const createTaskTitle = (taskItem, index) => {
        const taskHeader = document.createElement('h4');
        taskHeader.textContent = taskItem.title;

        if (taskItem.dueDate) {
            const taskDueDate = document.createElement('h6');
            taskDueDate.textContent = "Due Date: " + format(taskItem.dueDate,"dd-MM-yyyy");
            taskHeader.appendChild(taskDueDate);
        }

        const editIcon = document.createElement('img');
        editIcon.alt = 'edit';
        editIcon.src = '../dist/images/note-edit-outline.svg';
        editIcon.classList.add('edit-task-icon');
        editIcon.dataset.index = index;
        taskHeader.appendChild(editIcon);

        return taskHeader;
    }

    const createTaskNotes = (taskItem) => {
        const taskNotes = document.createElement('p');
        taskNotes.textContent = taskItem.notes;
        return taskNotes;
    }


    const createTaskTable = (taskItem, index) => {
        if (!taskItem.parts) return;
        const tableHeaders = [' ', 'Task Description', 'Status'];
        const table = document.createElement('table');
        table.classList.add('parts-list-table', `table-${index}`, 'hidden');

        const tableColumns = document.createElement('colgroup');
        tableHeaders.forEach( (_, index) => {
            const tableCol = document.createElement('col');
            tableCol.classList.add(`parts-table-index-${index+1}`);
            tableColumns.appendChild(tableCol);
        })
        table.appendChild(tableColumns);

       
        const tableRow = document.createElement('tr');
        tableHeaders.forEach( item => {
            const header = document.createElement('th');
            header.textContent = item;
            tableRow.appendChild(header);
        })
        table.appendChild(tableRow);

        taskItem.parts.forEach( (part, i) => {
            table.appendChild(createTaskParts(part, i, index));
        });

        return table;
        }

    const createTaskParts = (part, index, itemIndex) => {   
        const tableRow = document.createElement('tr');
        const partIndex = document.createElement('td');
        partIndex.textContent = index + 1;
        const partItem = document.createElement('td');
        partItem.textContent = part.value;
        const statusContainer = document.createElement('td');
        statusContainer.classList.add('status-container');
        const status = document.createElement('span');
        status.textContent = part.status;
        status.classList.add('part-item-status', `part-${index}`);

        const completed = document.createElement('span');
        completed.textContent = part.status === 'completed' ? '☑' : '☐';
        completed.classList.add('part-item-status-checkbox');
        completed.dataset.index = index;
        completed.dataset.itemIndex = itemIndex;

        statusContainer.append(status);
        statusContainer.append(completed);
        tableRow.appendChild(partIndex);
        tableRow.appendChild(partItem);
        tableRow.appendChild(statusContainer);
        return tableRow;
    }

    const createTaskFooter = (taskItem) => {
        const footerContainer = document.createElement('div');
        footerContainer.classList.add('task-item-footer-container');

        if (taskItem.parts.length){
            const taskCount = document.createElement('span');
            const taskCompleteCount = getTaskItemPartCompleteCount(taskItem); 
            taskCount.textContent = `Total parts complete: ${taskCompleteCount} of ${taskItem.parts.length}`;
            footerContainer.appendChild(taskCount);
        }

        const dateCreated = document.createElement('span');
        dateCreated.textContent = 'Date created: ' +format(taskItem.dateCreated, "dd-MM-yyyy");
        dateCreated.classList.add('list-item-date-created');
        footerContainer.appendChild(dateCreated);
        return footerContainer;
    }

    function create(taskItem, index){
        const taskContainer = createTaskContainer(index, taskItem);
        taskContainer.appendChild(createTaskTitle(taskItem, index));
        taskContainer.appendChild(createTaskNotes(taskItem));
        if (taskItem.parts.length > 0) taskContainer.appendChild(createTaskTable(taskItem, index));
        taskContainer.appendChild(createTaskFooter(taskItem));
        return taskContainer;
    }
    
    return { create };
})();


export const alterTableStatus = (itemIndex, partIndex, completeStatus) => {
    const partStatus = document.querySelector(`.table-${itemIndex} .part-${partIndex}`);
    const currentListIndex = document.querySelector('.current-list').dataset.index;
    partStatus.textContent = siteStorage.updateTaskCompleteStatus(
                        currentListIndex, itemIndex, partIndex, completeStatus);
}


const getTaskItemPartCompleteCount = (taskItem) => {
    const count = taskItem.parts.reduce( (acc, cv) => cv.status === 'completed' ? acc+=1 : 0, 0);
    return count;
}    

export const updateTaskItemPartCompleteDisplay = (taskItem) => {
    const span = document.querySelector('.task-item-footer-container > span');
    span.textContent = `Total parts complete: ${getTaskItemPartCompleteCount(taskItem)} of ${taskItem.parts.length}`;
}