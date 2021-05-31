let tasksData = [{
    id: 1,
    name: 'ssh'
},
{
    ip: 2,
    name: 'ftp'
}];

export default () => {
    const getTasks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(tasksData);
            }, 2000);
        });
    };

    const addTask = data => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                tasksData.push(data);
                resolve(true);
            }, 2000)
        });
    }

    return {
        getTasks,
        addTask,
    };
}