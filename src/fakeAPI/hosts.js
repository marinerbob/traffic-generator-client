let hostsData = [{
    ip: '10.1.1.1',
    name: 'O-KS-NTP'
},
{
    ip: '10.1.1.2',
    name: 'O-KS-DNS'
},
{
    ip: '10.1.1.3',
    name: 'O-KS-AD'
},
{
    ip: '10.1.1.4',
    name: 'O-KS-FTPS'
}];

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
    const getHosts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(hostsData);
            }, 2000);
        });
    };

    const addHost = data => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                hostsData.push(data);
                resolve(true);
            }, 2000)
        });
    }

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
        getHosts,
        getUsers,
        addHost,
        addUser
    };
}