import getApiInstance from './instance';

const tasksInstance = getApiInstance('/tasks');

export const getTasksList = async () => {
    return (await tasksInstance.get('/list')).data;
};

export const getTaskById = async (id) => {
    return (await tasksInstance.get(`/${id}`)).data;
};

export const addNewTask = async (data) => {
    return (await tasksInstance.post('/new', data)).data;
};

export const deleteTask = async (taskId) => {
    return (await tasksInstance.delete(`/${taskId}`)).data;
};

export const editTask = async (editedData) => {
    return (await tasksInstance.put('/edit', editedData)).data;
};