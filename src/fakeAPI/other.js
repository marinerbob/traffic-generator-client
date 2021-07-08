import { promisify } from './utils';

let organizations = [
    {
        id: 1,
        name: 'Округ'
    },
    {
        id: 2,
        name: 'Армия 1'
    },
    {
        id: 3,
        name: 'Армия 1 Дивизия 1'
    },
    {
        id: 4,
        name: 'Армия 1 Дивизия 2'
    },
    {
        id: 5,
        name: 'Армия 1 Дивизия 3'
    },
    {
        id: 6,
        name: 'Армия 1 Дивизия 4'
    },
    {
        id: 7,
        name: 'Армия 2'
    }
]

let departments = [
    {
        id: 1,
        name: 'МТО'
    },
    {
        id: 2,
        name: 'ОБИ'
    },
    {
        id: 3,
        name: 'Командование'
    }
];

let titles = [
    {
        id: 1,
        name: 'Адъютант'
    },
    {
        id: 2,
        name: 'Командир батальона'
    },
    {
        id: 3,
        name: 'Еще одна должность'
    },
    {
        id: 4,
        name: 'Начальник'
    }
];

export const getOrganizations = () => promisify(organizations);
export const getTitles = () => promisify(titles);
export const getDepartments = () => promisify(departments);