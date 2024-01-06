
export default class Task{
    constructor(title, dueDate = Date.now(), notes = '', tasks = []){
        console.log(title, dueDate, notes, tasks);
        this.title = title;
        this.dueDate = dueDate;
        this.notes = notes;
        this.tasks = tasks;
        this.status = 'incomplete';
    }

    getTitle(){
        return this.title;
    }
    updateTitle(title){
        return this.title = title;
    }
    getDueDate(){
        return this.dueDate;
    }
    updateDueDate(date){
        return this.dueDate = Date(date);
    }
    getNotes(){
        return this.notes;
    }
    updateNotes(notes){
        return this.notes = notes;
    }
}