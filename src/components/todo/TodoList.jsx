import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

import style from './TodoList.module.css';

function TodoList() {
  const todos = useSelector((state) => state);
  return (
    <div className={style.todoList_item}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
