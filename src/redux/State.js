let rerenderEntireTree = () => {
    console.log('State changed');
}

const state = {
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

}

window.state = state;

export let addPost = () => {

    let newPost = {
        id: 5,
        messages: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;