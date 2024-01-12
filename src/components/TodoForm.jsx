import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      dispatch(
        addTodo({
          id: new Date().getTime(),
          text: todo,
          completed: false,
        })
      );
      setTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add tasks"
      />
      <button onClick={handleAddTodo}>Submit</button>
    </div>
  );
};

export default TodoForm;
