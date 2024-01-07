import { loadSite } from "./load-site";
import { siteStorage } from "./storage";
import TaskList from "./tasklist";

export const startScreenListeners = () => {
    const modal = document.querySelector('.modal-start-screen');
    const form = document.querySelector('.modal-start-screen form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const user = document.querySelector('#username').value;
        const pass = document.querySelector('#password').value;
        console.log(user, pass);
        siteStorage.setUserAccount(user, pass);
        siteStorage.addList(new TaskList('Default List'));
        loadSite.init();
        modal.remove();
    })
}