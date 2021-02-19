import './App.css';
import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import User from './components/User'
import ConfigRoute from './ConfigRoute';
class App extends React.Component { 
  handleChange = (event) => {
    const value = event.target.value
    localStorage.setItem('name', value);
  }
  handleClick = () => {
    const a = localStorage.getItem('name');
    alert(a)
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <ConfigRoute path='/user' component={User} />
        </Switch>
      </Router>
    )
  }
}

export default App;