import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    UNFOLLOW = 'UNFOLLOW';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,

            };


        default:
            return state;
    }

};


export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const getAuthUserData = () =>  {
    return (dispatch) => {
        authAPI.getAuth().then(data => {
            //проверка, если залогинены - должны задиспатчить авторизационные данные
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login))
            }
        });
    }
};

export default authReducer;