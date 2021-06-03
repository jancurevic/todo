import React from "react";
import './Todo.css';

import {useParams} from "react-router-dom";

export default function Todo({task, isDone}){
  const params = useParams();
  return (
    <>
    <div className="todo">{task} - {isDone ? 'Done' : 'Not done'}</div>
    <div>{task} with id {params.id}</div>
    </>
  );
};