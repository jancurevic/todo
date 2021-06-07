import React from "react";
import "antd/dist/antd.css";
import "./TodoList.css";
// import { Todo } from "../Todo/Todo";
import { Table } from "antd";

import AboutButton from "../AboutButton/AboutButton";
// import AboutTodo from "../AboutTodo/AboutTodo";

export default function TodoList({ todos, setTodos }) {
  const columns = [
    {
      title: "Task",
      dataIndex: "task",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.task > b.task,
    },
    {
      title: "About",
      dataIndex: "about",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.about > b.about,
    },
    {
      title: "Hours Left",
      dataIndex: "hoursLeft",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.hoursLeft - b.hoursLeft,
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <>
          <AboutButton todos={todos} setTodos={setTodos} record={record} />
        </>
      ),
    },
  ];

  return (
    <Table
      className="todoTable"
      columns={columns}
      dataSource={todos}
    />
  );
}
