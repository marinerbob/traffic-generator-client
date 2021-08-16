import * as yup from 'yup';

const ipRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;

export default yup.object().shape({
    name: yup.string().required('Введите имя хоста'),
    ipaddr: yup.string().required('Введите ip-адрес').matches(ipRegex, 'Введите корректный ip-адрес'),
    availableUsers: yup.array().required('Выберите хотя бы одного пользователя').min(1, 'Выберите хотя бы одного пользователя')
});