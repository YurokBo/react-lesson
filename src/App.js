import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile />}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    {/*добавляем компоненту Users*/}
                    <Route path='/users'
                           render={() => <div>Users</div>}/>

                    <Route path='/news'
                           render={() => <News />}/>
                    <Route path='/music'
                           render={() => <Music />}/>
                    <Route path='/settings'
                           render={() => <Settings />}/>
                </div>
            </div>

    );
};

export default App;
