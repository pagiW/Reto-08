import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from './components/containers/Container';
import Error404 from './components/containers/Error404';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/Reto-08' component={Container} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
