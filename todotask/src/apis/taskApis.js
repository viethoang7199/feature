import axiosClient from './axiosClient';
const taskApis = {
    getAll() {
        const url = '/todos'
        return axiosClient.get(url)
    },

    add: async (todo) => {
        const response = await axiosClient.post('/todos', todo);
        return response;
    },

    update: async (todo) => {
        const response = await axiosClient.patch(`/todos/${todo.id}`, todo);
        return response;
    },

    delete: async (todoId) => {
        const response = await axiosClient.delete(`/todos/${todoId}`);
        return response;
    },

    filter() {
        const url = '/todos?status=New'
        return axiosClient.get(url)
    }
}

export default taskApis;