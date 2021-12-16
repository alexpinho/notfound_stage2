import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './screens/Landing';
import About from './screens/About';
import Work from './screens/Work';
import Contact from './screens/Contact';
import './styles/base.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/about' component={About} exact />
        <Route path='/work' component={Work} exact />
        <Route path='/contact' component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;
