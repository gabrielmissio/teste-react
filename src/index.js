import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormRegister from './components/form/FormCreateRegister';
import FormTag from './components/form/FormCreateTag';
import TableRegister from './components/table/TableRegister';
import TableTag from './components/table/TableTag';

ReactDOM.render(
  <React.StrictMode>
    <TableTag />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
