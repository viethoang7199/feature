export const loadState = () => {
    const data = localStorage.getItem('dayList');
    if (data === null) {
        return undefined;
    }
    return JSON.parse(data);
};

export const saveState = (state) => {
    const data = JSON.stringify(state);
    localStorage.setItem('dayList', data);
};