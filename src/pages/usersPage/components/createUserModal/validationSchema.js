import * as yup from 'yup';

const nonKyrillicRegex = /[a-zA-Z0-9_-]/gi;

export default yup.object().shape({
    name: yup.string().required('Введите имя пользователя'),
    surname: yup.string().notRequired(),
    patroname: yup.string().notRequired(),
    login: yup.string().required('Введите логин пользователя').matches(nonKyrillicRegex, `Используйте только латинские буквы, цифры и символы "-" и "_"`),
    password: yup.string().required('Введите пароль').min(4, 'Длина пароля минимум 4 символа'),
    title: yup.number(),
    organization: yup.number(),
    department: yup.number(),
});