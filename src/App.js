import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Info from './Pages/Info';
import './styles/applications.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/info' component={Info} exact />
      </Switch>
    </Router>
  );
}

export default App;
