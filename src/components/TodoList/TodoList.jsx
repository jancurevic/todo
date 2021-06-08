import React, { useState } from "react";
import "antd/dist/antd.css";
import "./TodoList.css";
// import { Todo } from "../Todo/Todo";
import { Table, Button } from "antd";

import AboutButton from "../AboutButton/AboutButton";
// import AboutTodo from "../AboutTodo/AboutTodo";

export default function TodoList({ todos, setTodos }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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
      render: (record) => (
        <>
          <AboutButton todos={todos} setTodos={setTodos} record={record} />
        </>
      ),
    },
  ];

  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys([...selectedKeys]);
  };

  const deleteSelectedTodos = () => {
    const filteredTodos = todos.filter(
      (todo) => ![...selectedRowKeys].includes(todo.key)
    );
    setTodos([...filteredTodos]);
    setSelectedRowKeys([]);
  };

  const rowSelection = {
    ...selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <Button onClick={deleteSelectedTodos}>Delete selected</Button>
      {todos && <Table
        className="todoTable"
        columns={columns}
        dataSource={todos}
        rowSelection={rowSelection}
      />}
    </>
  );
}
