let usersData = [{
    name: 'user1',
    password: '12345678'
},
{
    name: 'admin',
    password: '12345678'
},
{
    name: 'admin2',
    password: '12345678'
},
{
    name: 'admin3',
    password: '12345678'
}];

export default () => {
    const getUsers = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(usersData);
            }, 2000);
        });
    }

    const addUser = data => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                usersData.push(data);
                resolve(true);
            }, 2000)
        });
    }

    return {
        getUsers,
        addUser
    };
}
