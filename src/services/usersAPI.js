import axios from "axios";

axios.defaults.baseURL = 'https://6477e89e362560649a2d08a9.mockapi.io/api/v1';

export const fetchUsers = async () => {
    try {
        const response = await axios.get('/users');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getVisibleUsers = (page, users) => {

    const perPage = 3;
    const quantity = page * perPage;

    return  users.slice(0, quantity);
}