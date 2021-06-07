import React from "react";
import './Todo.css';

import {useParams} from "react-router-dom";

export default function Todo({todos, setTodos}){
  const params = useParams();
  console.log({params});
  const todo = todos.find(todo => `${todo.id}` === params.id);

  return (
    <>
      <div>{todo.task}</div>
      <div>{todo.about}</div>
      <div>{todo.hoursLeft}</div>
      <div>{todo.additionalInfo}</div>
    </>
  );
};