import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";

//function which reducers stick together
let reducers = combineReducers({
    //ветки из объекта _state, за которые отвечают functions reducers
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

//create store through func; отдаем закомбайненые reducers to store as args
let store = createStore(reducers);

window.store = store;

export default store;