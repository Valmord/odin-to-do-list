
export default class Task{
    constructor(title, dueDate = Date.now(), notes = '', parts = []){
        console.log(title, dueDate, notes, parts);
        this.title = title;
        this.dueDate = dueDate;
        this.notes = notes;
        this.parts = parts;
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