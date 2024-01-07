
export default class Task{
    constructor(title, dueDate = Date.now(), notes = '', parts = []){
        this.title = title;
        this.dateCreated = Date.now();
        this.dueDate = dueDate;
        this.dateEdited =  ''; // to be implemented
        this.notes = notes;
        this.parts = parts;
        this.status = 'incomplete';
    }

    getPartTotal(){
        return this.parts.length;
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