import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Userdata from "./Userdata";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing=(
  <Router>
  <ul>
   <li>
     <Link to="/Submit" >SUBMIT</Link>
   </li>
   <li>
     <Link to="/Userdata" >Userdata</Link>
   </li>
  </ul>
  <div>
  <Route path="/Submit" component={App} />
  <Route path="/Userdata" component={Userdata} />
  </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
