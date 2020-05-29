import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import { TopArtists } from './pages/top-artists/top-artists.page';
import { Login } from './pages/login/login.page';

function App() {

  return (
    <Switch>
      <Route exact path='/' component={ Login } />
      <Route path='/artists' component={ TopArtists } />
    </Switch>
  );
}

export default App;
