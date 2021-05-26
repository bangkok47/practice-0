import React from 'react';
import TodoInput from '../todo/TodoInput';
import TodoList from '../todo/TodoList';

function ProtectedPage() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default ProtectedPage;
