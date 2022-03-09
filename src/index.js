import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import './index.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/upload' component={Upload}/>
        <Route path='/' component={Home}/>
      </Routes>
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

