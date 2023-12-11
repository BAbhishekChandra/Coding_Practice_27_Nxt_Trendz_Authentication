import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'

import NotFound from './components/NotFound'

import './App.css'

// <h1>Remove this heading and write your code here</h1>

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />

    <Route component={NotFound} />
  </Switch>
)

export default App
