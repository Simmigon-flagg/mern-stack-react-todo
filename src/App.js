import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import logo from "./logo.svg"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

function App() {

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="http://localhost:3000" >
            <img src={logo} width="100" height="60" alt="Test"/>
          </a>
          <Link to="/" className="navbar-brand">
            MERN To-Do List
          </Link>
          <div className="">
          <ul className="navbar-nav mr-auto" >
              <li className="navbar-item">
                <Link to="/" >
                  To-Dos
                </Link>
              </li>|
              <li className="navbar-item">
              <Link to="/create" >
                   Create
                </Link>
              </li>
            </ul>
          </div>

     
        </nav>
        <h2>MERN To-Do</h2>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>

    </Router>
  );
}

export default App;
