import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [
    {id: 1, messages: 'Hi, how are you?', likesCount: 20},
    {id: 2, messages: 'It is my first post!', likesCount: 30},
    {id: 2, messages: 'It is my first post!', likesCount: 30},
    {id: 2, messages: 'It is my first post!', likesCount: 30},
]

const dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Ivan'},
    {id: 3, name: 'Ioan'},
    {id: 4, name: 'Ilia'},
    {id: 5, name: 'Olia'}
]

const messages = [
    {id: 1, messages: 'Hi'},
    {id: 2, messages: 'Hey'},
    {id: 3, messages: 'Hello'},
    {id: 4, messages: 'Hullo'},
    {id: 5, messages: 'Ho'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
