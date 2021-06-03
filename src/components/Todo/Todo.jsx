import React from "react";
import './Todo.css';

export default function Todo({task, isDone}){

  return (
    <div className="todo">{task} - {isDone ? 'Done' : 'Not done'}</div>
  );
};