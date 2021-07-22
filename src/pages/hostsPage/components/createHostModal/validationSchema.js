import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required('Введите имя хоста'),
    ip: yup.string().required('Введите ip-адрес').matches(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/, 'Введите корректный ip-адрес'),
    users: yup.array().required('Выберите хотя бы одного пользователя').min(1, 'Выберите хотя бы одного пользователя')
});