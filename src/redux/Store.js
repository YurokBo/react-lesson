import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: 'Hi, how are you?', likesCount: 20},
                {id: 2, messages: 'It is my first post!', likesCount: 30},
                {id: 2, messages: 'It is my first post!', likesCount: 30},
                {id: 2, messages: 'It is my first post!', likesCount: 30},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Ioan'},
                {id: 4, name: 'Ilia'},
                {id: 5, name: 'Olia'}
            ],
            messages: [
                {id: 1, messages: 'Hi'},
                {id: 2, messages: 'Hey'},
                {id: 3, messages: 'Hello'},
                {id: 4, messages: 'Hullo'},
                {id: 5, messages: 'Ho'}
            ],
            newMessageBody: ''
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        //вызываем reducer func и передаем им часть их state и action
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        //уведомили подписчиков на изменения состояния объекта
        this._callSubscriber(this._state);

    }

};





export default store;
window.state = store;