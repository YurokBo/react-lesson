const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
        },

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                messages: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

export const addPostActionCreator = () => ({type: ADD_POST,});

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    });

export default store;
window.state = store;