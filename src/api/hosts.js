import getApiInstance from './instance';

const hostsInstance = getApiInstance('/hosts');

export const getHostsList = async () => {
    const res = await hostsInstance.get('/list');

    return res.data;
};

export const addNewHost = async (data) => {
    const res = await hostsInstance.post('/new', data);

    return res.data;
};