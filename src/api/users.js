import getApiInstance from './instance';

const usersInstance = getApiInstance('/users');

export const getUsersList = async () => {
    const res = await usersInstance.get('/list');

    return res.data;
};

export const getUserById = async (id) => {
    return (await usersInstance.get(`/${id}`)).data;
};

export const addNewUser = async (data) => {
    return (await usersInstance.post('/new', data)).data;
};
