import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{marginRight:"80vh",marginLeft:'20vh'}}>
      <h1 style={{color:'black'}}>To Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
