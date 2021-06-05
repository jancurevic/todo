
import React from "react";
import { Button } from "antd";

export default function AboutButton({todos, setTodos, record}){

  return (
    <div
      className="btn-wrap"
      style={{
        width: "200px",
      }}
    >
      {" "}
      <Button
        onClick={() => {
            console.log(record)
          setTodos([...todos.map(todo => todo.task === record.task ? {...record, isAboutVisible: !record.isAboutVisible} : todo)]);
        }}
      >
        {" "}
        Click{" "}
      </Button>
    </div>
  );
};
