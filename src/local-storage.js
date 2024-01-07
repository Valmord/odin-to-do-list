// from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

export const localStore = (() => {
    const canStore = storageAvailable("localStorage");

    const getLocalStorage = () => {
        if (!canStore) return;
        const storage = JSON.parse(localStorage.getItem("todo-data"));
        return !storage ? [] : storage; // return empty array if nothing stored.
    }

    const setLocalStorage = (storage) => {
        if (!canStore) return;
        console.log({storage});
        localStorage.setItem("todo-data",JSON.stringify(storage));
    }
    return { getLocalStorage, setLocalStorage};
})();