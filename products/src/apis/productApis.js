import axiosClient from './axiosClient';

const productApis = {

    getAll: async () => {
        const response = await axiosClient.get('/products');
        return response;
    },

    add: async (product) => {
        const response = await axiosClient.post('/products', product);
        return response;
    }

};

export default productApis;