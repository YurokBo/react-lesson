import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7ea7ad70-1725-4d83-8d74-61bde9b8f3b0"
    },
});
export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    follow (userID) {
        return instanse.post(`follow/${userID}`)
    },

    unfollow (userID) {
       return instanse.delete(`follow/${userID}`)
    },

    getProfile (userId) {
        return (
            instanse.get(`profile/` + userId)
        )
    }
};

export const authAPI = {
    getAuth () {
        return instanse.get(`auth/me`).then(response => response.data)
    }
};
/*
export const profileAPI = {
  getProfile (userId) {
      return (
          instanse.get(`profile/` + userId)
      )
  }
};*/

