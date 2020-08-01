import axios from '../../core/axios';

export default {
    get: () => axios.get('/clients'),
    add: values => axios.post('/clients', values),
    show: id => axios.get('/clients/' + id),
};