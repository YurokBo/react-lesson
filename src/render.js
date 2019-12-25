import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*import state from "./redux/State";*/
import {addPost, updateNewPostText} from "./redux/State";
import {BrowserRouter, Route} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

export default rerenderEntireTree;
