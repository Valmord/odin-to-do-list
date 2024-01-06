

export function addTaskListeners(){
    const cancelTaskBtn = document.querySelector('.cancel-task-btn');
    const addTaskModal = document.querySelector('.modal-add-task');
    const addTaskForm = document.querySelector('.modal-add-task > form')

    addTaskForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Hello!')
    })

    addTaskModal.addEventListener('click', e => {
        if (e.target === addTaskModal) addTaskModal.classList.remove('modal-shown');
    })

    cancelTaskBtn.addEventListener('click', () => {
        addTaskForm.reset(); // only child is the form.
        addTaskModal.classList.remove('modal-shown');
    })
}