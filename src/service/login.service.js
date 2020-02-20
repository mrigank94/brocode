import axios from 'axios';

const login = async (username, password) => {
    const {data} = await axios.post('http://localhost:3003/api/login', {
        username,
        password
    });
    return data;
};

export default {
    login
}