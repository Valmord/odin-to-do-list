import { displaySidebarLists, displayListItems, displayUserName } from "./dom-display";
import { siteStorage } from "./storage";
import { sidebarListeners } from "./dom-sidebar-listeners";
import { addTaskListeners } from "./modal-add-task-listeners";
import { addListListeners } from "./modal-add-list-listeners";
import { createStartScreen } from "./dom-start-screen";
import { startScreenListeners } from "./dom-start-screen-listeners";


export const loadSite = (() => {
    const init = () => {
        const userCreated = siteStorage.getLists()?.length;
        if (!userCreated) {
            createStartScreen.createModal();
            startScreenListeners();
        } else {
            displayUserName();
            displaySidebarLists();
            displayListItems.showPage();
            sidebarListeners.init();
            addListListeners();
            addTaskListeners();
        }
    }

    return { init };
})();