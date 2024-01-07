import { format } from "date-fns";

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
            taskDueDate.textContent = "Due Date: " + format(taskItem.dueDate,"dd-MM-yyyy hh:mm");
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

        taskItem.parts.forEach( (part, index) => {
            table.appendChild(createTaskParts(part, index));
        });

        return table;
        }

    const createTaskParts = (part, index) => {   
        const tableRow = document.createElement('tr');
        const partIndex = document.createElement('td');
        partIndex.textContent = index + 1;
        const partItem = document.createElement('td');
        partItem.textContent = part;
        const status = document.createElement('td');
        status.textContent = 'Not complete';
        tableRow.appendChild(partIndex);
        tableRow.appendChild(partItem);
        tableRow.appendChild(status);
        return tableRow;
    }

    const createTaskFooter = (taskItem) => {
        const footerContainer = document.createElement('div');
        footerContainer.classList.add('task-item-footer-container');

        if (taskItem.parts.length){
            const taskCount = document.createElement('span');
            taskCount.textContent = `Total parts complete: 0 of ${taskItem.parts.length}`;
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
