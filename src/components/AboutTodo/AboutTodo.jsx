import React from "react";

export default function AboutTodo({todo}){
  return (
    <>
        <div>Additional info - {todo.additionalInfo}</div>
        <div>Rating - {todo.rating}</div>
    </>
  );
};