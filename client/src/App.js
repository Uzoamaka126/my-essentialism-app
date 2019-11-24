import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Application Components
import Home from '../src/components/Home';
import AboutUs from '../src/components/navigation/AboutUs';
import Signup from '../src/components/auth/Signup';
import Login from '../src/components/auth/Login';
import Dashboard from '../src/components/userDashboard/Dashboard';

function App() {
  return (
    <Router>
        <div className="App">
        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/dashboard" component={Dashboard}/>

        </main>
      </div>
    </Router>
  );
}

export default App;
