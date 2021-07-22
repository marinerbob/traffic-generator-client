let tasksData = [{
    id: 1,
    name: 'SSH for Okrug',
    taskTypeId: 1,
    taskType: 'ssh',
    senderId: 1,
    sender: 'O-KS-DNS',
    receiverId: 3,
    receiver: 'O-KS-FTPS',
    isActive: true,
    isRepeatable: true,
    isUnix: true,
    repeats: 10,
    delay: 100,
    startTime: '11:35',
    userId: 1,
    userLogin: 'bugaev_v'
},
{
    id: 2,
    name: 'FTP for Okrug1',
    taskTypeId: 2,
    taskType: 'ftp',
    senderId: 1,
    sender: 'O-KS-DNS',
    receiverId: 3,
    receiver: 'O-KS-FTPS',
    isActive: true,
    isRepeatable: true,
    isUnix: true,
    repeats: 10,
    delay: 100,
    startTime: '11:20',
    userId: 1,
    userLogin: 'bugaev_v'
},
{
    id: 3,
    name: 'FTP for Okrug2',
    taskTypeId: 2,
    taskType: 'ftp',
    senderId: 1,
    sender: 'O-KS-DNS',
    receiverId: 3,
    receiver: 'O-KS-FTPS',
    isActive: true,
    isRepeatable: true,
    isUnix: true,
    repeats: 10,
    delay: 100,
    startTime: '11:20',
    userId: 1,
    userLogin: 'bugaev_v'
},
{
    id: 4,
    name: 'FTP for Okrug3',
    taskTypeId: 2,
    taskType: 'ftp',
    senderId: 1,
    sender: 'O-KS-DNS',
    receiverId: 3,
    receiver: 'O-KS-FTPS',
    isActive: true,
    isRepeatable: true,
    isUnix: true,
    repeats: 10,
    delay: 100,
    startTime: '11:20',
    userId: 1,
    userLogin: 'bugaev_v'
},
{
    id: 5,
    name: 'FTP for Okrug4',
    taskTypeId: 2,
    taskType: 'ftp',
    senderId: 1,
    sender: 'O-KS-DNS',
    receiverId: 3,
    receiver: 'O-KS-FTPS',
    isActive: true,
    isRepeatable: true,
    isUnix: true,
    repeats: 10,
    delay: 100,
    startTime: '11:20',
    userId: 1,
    userLogin: 'bugaev_v'
},
{
    id: 6,
    name: 'FTP for Okrug5',
    taskTypeId: 2,
    taskType: 'ftp',
    senderId: 1,
    sender: 'O-KS-DNS',
    receiverId: 3,
    receiver: 'O-KS-FTPS',
    isActive: true,
    isRepeatable: true,
    isUnix: true,
    repeats: 10,
    delay: 100,
    startTime: '11:20',
    userId: 1,
    userLogin: 'bugaev_v'
},
{
    id: 7,
    name: 'FTP for Okrug6',
    taskTypeId: 2,
    taskType: 'ftp',
    senderId: 1,
    sender: 'O-KS-DNS',
    receiverId: 3,
    receiver: 'O-KS-FTPS',
    isActive: true,
    isRepeatable: true,
    isUnix: true,
    repeats: 10,
    delay: 100,
    startTime: '11:20',
    userId: 1,
    userLogin: 'bugaev_v'
},
{
    id: 8,
    name: 'FTP for Okrug7',
    taskTypeId: 2,
    taskType: 'ftp',
    senderId: 1,
    sender: 'O-KS-DNS',
    receiverId: 3,
    receiver: 'O-KS-FTPS',
    isActive: true,
    isRepeatable: true,
    isUnix: true,
    repeats: 10,
    delay: 100,
    startTime: '11:20',
    userId: 1,
    userLogin: 'bugaev_v'
},
{
    id: 9,
    name: 'FTP for Okrug8',
    taskTypeId: 2,
    taskType: 'ftp',
    senderId: 1,
    sender: 'O-KS-DNS',
    receiverId: 3,
    receiver: 'O-KS-FTPS',
    isActive: true,
    isRepeatable: true,
    isUnix: true,
    repeats: 10,
    delay: 100,
    startTime: '11:20',
    userId: 1,
    userLogin: 'bugaev_v'
}];

let taskTypes = [{
    id: 1,
    name: 'ssh'
},  
{
    id: 2,
    name: 'ftp'
},
{
    id: 3,
    name: 'mail'
}];

const statuses = [{
    id: 1,
    name: 'in progress',
}, {
    id: 2,
    name: 'started'
}, {
    id: 3,
    name: 'finished'
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
    };

    const getTaskTypes = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(taskTypes);
            }, 2000);
        });
    };

    const getStatuses = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(statuses);
            }, 2000);
        });
    };


    return {
        getTasks,
        addTask,
        getTaskTypes,
        getStatuses
    };
}