import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../features/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [showCompleted, setShowCompleted] = useState(false);

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  const totalCompletedTasks = todos.filter((todo) => todo.completed).length;

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div>
      <label>
        <input type="checkbox"checked={showCompleted}onChange={() => setShowCompleted(!showCompleted)}/>
        Show Completed Tasks
      </label>
      <p>Total Completed Tasks: {totalCompletedTasks}</p>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed}onChange={() => handleToggleComplete(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className='delete' onClick={() => handleDelete(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
