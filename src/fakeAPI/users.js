let usersData = [{
    id: 1,
    fullName: 'Вова Бугаев',
    login: 'bugaev_v',
    departmentId: 2,
    departmentName: 'ОБИ',
    organizationId: 1,
    organizationName: 'Округ',
    doljn: 'Начальник',
    password: '12345678'
},
{
    id: 2,
    fullName: 'А Андреев',
    login: 'andreev_a',
    departmentId: 3,
    departmentName: 'Командование',
    organizationId: 2,
    organizationName: 'Армия 1',
    doljn: 'Адъютант',
    password: '12345678'
},
{
    id: 3,
    fullName: 'Abelardo Reichert',
    login: 'reichert_a',
    departmentId: 2,
    departmentName: 'ОБИ',
    organizationId: 1,
    organizationName: 'Округ',
    doljn: 'Еще одна должность',
    password: '12345678'
},
{
    id: 4,
    fullName: 'Evans Ruecker',
    login: 'ruecker_e',
    departmentId: 1,
    departmentName: 'МТО',
    organizationId: 3,
    organizationName: 'Армия 1 Дивизия 1',
    doljn: 'Еще одна должность',
    password: '12345678'
},];

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

    const getUsersForSelect = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const selectData = usersData.map(user => ({ label: user.login, value: user.id }));
                resolve(selectData);
            }, 2000);
        });
    }

    return {
        getUsers,
        addUser,
        getUsersForSelect
    };
}
