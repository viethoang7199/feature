export const saveState = (state) => {
    const data = JSON.stringify(state);
    localStorage.setItem('userList', data);
};