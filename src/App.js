import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faHeart)

function App(props) {
  return (
 
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper__content">
          <Route path='/profile' render={() => <Profile dispatch = {props.dispatch} state = {props.state} />} />
          <Route path='/dialogs' render={() => <Dialogs dispatch = {props.dispatch} state = {props.state} />} />
        </div>
      </div>
 
  );
}

export default App;
