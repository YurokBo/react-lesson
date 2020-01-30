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
        case ADD_POST: {
            let newPost = {
                id: 5,
                messages: state.newPostText,
                likesCount: 0
            };
            //т.к. не имеем право менять объект, создаем копию объекта state и
            //и туда пушим newPost и возвращаем копию
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
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