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

function App() {

  let dialogs = [
    { id: 1, name: "Oleg Sadykov" },
    { id: 2, name: "Alexandra Sadykova" },
    { id: 3, name: "Vladislav Stoma" },
    { id: 4, name: "Vladislava Leontieva" },
    { id: 5, name: "Kirill Demchenko" },
]

let messages = [
  { id: 1, message: "Hello world" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "What time is it now?" },
  { id: 4, message: "Great game, thanks!" },
  { id: 5, message: "I love you!!!" }
]

let posts = [
  {id: 1, postText: "My first message", likesCount: "26"},
  {id: 1, postText: "My second message", likesCount: "52"},
  {id: 1, postText: "Another message", likesCount: "10"},
  {id: 1, postText: "Another one message", likesCount: "15"},
]


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper__content">
          <Route path='/profile' render={() =>  <Profile posts={posts}/>} />
          <Route path='/dialogs' render={() =>  <Dialogs dialogs={dialogs} messages={messages}/>} />
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
