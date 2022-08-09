import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './component/TodoContainer'
import { BrowserRouter } from 'react-router-dom';

// StyleSheet
import './App.css'

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <TodoContainer />
      </BrowserRouter>
    </React.StrictMode>, 
document.getElementById('root'))