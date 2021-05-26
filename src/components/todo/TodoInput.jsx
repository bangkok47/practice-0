import React from 'react';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';

import { Button, TextField } from '@material-ui/core';
import { addTodo } from '../../redux/actions/actions';
import style from './TodoInput.module.css';

function TodoInput() {
  const [name, setName] = React.useState('');

  const dispatch = useDispatch();

  const inputValue = (e) => {
    setName(e.target.value);
  };

  const addInputValue = () => {
    dispatch(
      addTodo({
        id: uuid(),
        name: name,
      }),
    );
    setName('');
  };

  return (
    <div>
      <div className={style.input_items}>
        <TextField
          onChange={inputValue}
          value={name}
          className={style.input}
          fullWidth
          id="standard-basic"
          label="write here"
          inputProps={{ maxLength: 40 }}
        />
        <Button onClick={addInputValue} variant="outlined" color="primary">
          ADD
        </Button>
      </div>
    </div>
  );
}

export default TodoInput;
