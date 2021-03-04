import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormRegister from './components/form/FormCreateRegister';
import FormTag from './components/form/FormCreateTag';
import TableRegister from './components/table/TableRegister';
import TableTag from './components/table/TableTag';
import Home from './components/home/Home';
import NotFound from './components/not_found/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="*" exact={true} component={NotFound} />
            <Route path="/new-register" component={FormRegister} />
            <Route path="/view-register" component={TableRegister} /> 
            <Route path="/new-tag" component={FormTag} />
            <Route path="/view-tag" component={TableTag} />
        </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
