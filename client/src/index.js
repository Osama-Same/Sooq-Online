import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";


//axios.defaults.baseURL =`http://localhost:5000/`
axios.defaults.baseURL =`https://sooq-online.herokuapp.com/`
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
