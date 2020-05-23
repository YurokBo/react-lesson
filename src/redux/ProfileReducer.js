// create reducer function for profile page
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = 'SET_STATUS';
//инициализируем state для profilePage
//забираем profilePage из старого объекта store
let initialState = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 20},
        {id: 2, messages: 'It is my first post!', likesCount: 30},
        {id: 2, messages: 'It is my first post!', likesCount: 30},
        {id: 2, messages: 'It is my first post!', likesCount: 30},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                messages: action.newPostText,
                likesCount: 0
            };
            //делаем тоже, что и в DialogsReducer
            //do copy for each case
            //каждое изменение состояни перекидываем в копию объекта
            //убрали переменную stateCopy и сразу возвращаем копию объекта
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }

        case SET_USER_PROFILE: {
            return { ...state,  profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state,  status: action.status }
        }

        default:
            return state;
    }

};

//переносим action creators from state to here
export const addPostActionCreator = (addPost) => ({type: ADD_POST, addPost});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

//thunk functions
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                //запрос пришел - прелоадер скрылся
                dispatch(setUserProfile(response.data));
            });
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                //запрос пришел - прелоадер скрылся
                dispatch(setStatus(response.data));
            });
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
};



export default profileReducer;