// create reducer function for profile page
const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//инициализируем state для profilePage
//забираем profilePage из старого объекта store
let initialState = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 20},
        {id: 2, messages: 'It is my first post!', likesCount: 30},
        {id: 2, messages: 'It is my first post!', likesCount: 30},
        {id: 2, messages: 'It is my first post!', likesCount: 30},
    ],
        newPostText: '',
};

const profileReducer = (state = initialState, action) => {
switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                messages: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }

};

//переносим action creators from state to here
export const addPostActionCreator = () => ({type: ADD_POST,});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;