import * as yup from 'yup';

const paramsRegex = /((\d|\w)+=(\d|\w)+\\n)+/gi;

export default yup.object().shape({
    name: yup.string().required('Введите наименование задачи'),
    taskType: yup.number().required('Добавьте тип задачи'),
    sender: yup.number().required('Укажите получателя'),
    receiver: yup.number().required('Укажите отправителя'),
    userId: yup.number().required('Укажите активного пользователя'),
    isActive: yup.mixed(),
    isRepeatable: yup.mixed(),
    isUnix: yup.mixed(),
    repeats: yup.number(),
    delay: yup.string(),
    startTime: yup.string(),
    params: yup.string().matches(paramsRegex, 'Введите набор параметров в корректном формате'),
    description: yup.string()
});