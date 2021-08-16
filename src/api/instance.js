import axios from 'axios';

export default (controller) => {
    return axios.create({
        baseURL: `http://localhost:8080/api${controller}`,
        timeout: 1200
    });
};
