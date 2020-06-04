import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { TopArtists } from './pages/top-artists/top-artists.page';
import { Login } from './pages/login/login.page';
import { Completed } from './pages/completed/completed.page';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/artists' component={TopArtists} />
        <Route path='/completed' component={Completed} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
