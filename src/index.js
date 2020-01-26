import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/ReduxStore";
import {BrowserRouter, Route} from "react-router-dom";
//импорт provider из react-redux библиотеки
import {Provider} from "react-redux";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            /*чтобы иметь возможность обратиться к context всеми дочерними компонентами, обрамляем весь App*/
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
//store ееперь при изменении объекта вызовет анонимную стрелочну ф.цию в кот. передали rerenderEntireTree
//нам нужен state, запрашиваем его у store и передаем его в reranderEntireTree
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
