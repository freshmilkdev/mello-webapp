const localStorageKeys = {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken'
}
const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const saveState = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (e) {
        console.log(e);
    }
};

const removeState = (key) => {
    localStorage.removeItem(key);
};
export {
    localStorageKeys,
    loadState,
    saveState,
    removeState
}