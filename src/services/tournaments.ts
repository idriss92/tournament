import axios from 'axios';

const service = {
    getTournaments: () => axios.get('/tournament')
};

export default service;