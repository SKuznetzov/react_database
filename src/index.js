import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Upload from './pages/Upload'
// import App from './App'
import "core-js/stable"
import "regenerator-runtime/runtime"
import './index.css';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home}/>
        <Route exact path='/upload' component={Upload}/>
      </Switch>
    </HashRouter>
    )
}

export default App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

