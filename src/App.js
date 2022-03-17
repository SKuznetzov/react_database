import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'

import './App.css'
const App = () => {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/upload' component={Upload}/>
        </Switch>
      </HashRouter>
      )
  }
  
export default App