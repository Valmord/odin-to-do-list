export default class TaskList{
    constructor(title){
        this.title = title;
        this.todos = [];
    }

    getTitle(){
        return this.title;
    }
    updateTitle(title){
        return this.title = title;
    }
}