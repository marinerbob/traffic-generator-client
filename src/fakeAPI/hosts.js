let hostsData = [{
    id: 0,
    ip: '10.1.1.1',
    name: 'O-KS-NTP',
    availableUsers: []
},
{
    id: 1,
    ip: '10.1.1.2',
    name: 'O-KS-DNS',
    availableUsers: []
},
{
    id: 2,
    ip: '10.1.1.3',
    name: 'O-KS-AD',
    availableUsers: []
},
{
    id: 3,
    ip: '10.1.1.4',
    name: 'O-KS-FTPS',
    availableUsers: []
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

    return {
        getHosts,
        addHost,
    };
}