import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faHeart)

function App(props) {

  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper__content">
          <Route path='/profile' render={() => <Profile addPost = {props.addPost} state = {props.appState} />} />
          <Route path='/dialogs' render={() => <Dialogs state = {props.appState} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
