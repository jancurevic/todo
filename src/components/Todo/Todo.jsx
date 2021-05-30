import React from "react";
import './Todo.css';

export const Todo = ({task, isDone}) => {

  return (
    <div className="todo">{task} - {isDone ? 'Done' : 'Not done'}</div>
  );
};