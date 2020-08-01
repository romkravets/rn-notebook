import axios from '../../core/axios';

export default {
    get: () => axios.get('/appointments'),
    add: values => axios.post('/appointments', values),
    remove: id => axios.delete('/appointments/' + id),

};