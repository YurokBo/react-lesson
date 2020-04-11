import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7ea7ad70-1725-4d83-8d74-61bde9b8f3b0"
    },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
};

export const getAuth = () => {
    return instanse.get(`auth/me`).then(response => response.data)
};

