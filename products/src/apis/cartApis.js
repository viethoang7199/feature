import axiosClient from './axiosClient';

const cartApis = {

    getAll: async () => {
        const response = await axiosClient.get('/productsCart');
        return response;
    },

    add: async (productCart) => {
        const response = await axiosClient.post('/productsCart', productCart);
        return response;
    },

    delete: async (productCartId) => {
        const response = await axiosClient.delete(`/productsCart/${productCartId}`);
        return response;
    },

};

export default cartApis;