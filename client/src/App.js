import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as actions from './redux-store/actions/actionCreators';

import Home from './components/Home';
import AboutUs from './components/navigation/AboutUs';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './components/userDashboard/Dashboard';


function App(props) {
  return (
    <Router>
        <div className="App">
        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          {/* <Route exact path="/values" component={Values}/> */}
        </main>
      </div>
    </Router>
  );
}

export default connect(state=>state, actions)(App);
