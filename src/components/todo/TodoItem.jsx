import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions/actions';

import { Button } from '@material-ui/core';
import style from './TodoItem.module.css';

function TodoItem({ todo }) {
  const login = localStorage.getItem('isAuthorized') === 'true';

  const dispatch = useDispatch();

  const deleteBtn = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div>
      <div className={style.todoItems}>
        <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
        <div>{todo.name}</div>
        <div>
          {login ? (
            <Button onClick={deleteBtn} variant="contained" color="secondary">
              Delete
            </Button>
          ) : (
            <Button variant="contained" disabled>
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
