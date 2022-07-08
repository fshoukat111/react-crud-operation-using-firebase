import './App.css';
import React, { useState } from "react";

import {AddTodo} from './components/AddTodo/add-todo.component';
import {TodoList} from './components/todo-list/todo-list';

function App() {

  const addTodo = () => {

  }

  return (
    <>
    <AddTodo addSingleTodo={addTodo}/>
    <TodoList/>
    </>
  );
}

export default App;
