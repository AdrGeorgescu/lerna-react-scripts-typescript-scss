import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'

import './App.css';

function App() {
  return (
      <React.StrictMode>
        <Router basename={`${process.env.PUBLIC_URL}`}>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Redirect exact from="/" to="/home" />
            {/*<Route path="*" component={NotFoundPage} />*/}
          </Switch>
        </Router>
      </React.StrictMode>
  );
}

export default App;
