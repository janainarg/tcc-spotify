import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { TopArtists } from './pages/top-artists/top-artists.page';
import { Login } from './pages/login/login.page';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Link to='/artists' component={TopArtists} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
