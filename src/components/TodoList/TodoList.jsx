import React from "react";
import "antd/dist/antd.css";
import "./TodoList.css";
// import { Todo } from "../Todo/Todo";
import { Table } from "antd";

import AboutButton from "../AboutButton/AboutButton";
import AboutTodo from "../AboutTodo/AboutTodo";

export default function TodoList({ todos, setTodos }) {
  const columns = [
    {
      title: "Task",
      dataIndex: "task",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.task > b.task,
    },
    // {
    //   title: "is task done",
    //   dataIndex: "isDone",
    //   // defaultSortOrder: 'descend',
    //   // sorter: (a, b) => a.age - b.age,
    // },
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
          {record.isAboutVisible && <AboutTodo todo={record}/>}
        </>
      ),
    },
  ];

  // const todos = [
  //   {
  //     // id: 1,
  //     task: "task1",
  //     // isDone: true,
  //     about: "lorem  ipsum....",
  //     hoursLeft: 15,
  //   },
  //   {
  //     // id: 2,
  //     task: "task2",
  //     // isDone: false,
  //     about: "lorem ipsum....",
  //     hoursLeft: 13,
  //   },
  //   {
  //     // id: 3,
  //     task: "task3",
  //     // isDone: false,
  //     about: "lorem ipsum....",
  //     hoursLeft: 17,
  //   },
  //   {
  //     // id: 4,
  //     task: "task4",
  //     // isDone: false,
  //     about: "lorem ipsum....",
  //     hoursLeft: 20,
  //   },
  //   {
  //     // id: 5,
  //     task: "task5",
  //     // isDone: false,
  //     about: "lorem ipsum....",
  //     hoursLeft: 1,
  //   },
  //   {
  //     // id: 6,
  //     task: "task6",
  //     // isDone: false,
  //     about: "lorem ipsum....",
  //     hoursLeft: 5,
  //   },
  // ];

  // function onChange(pagination, filters, sorter, extra) {
  //   console.log("params", pagination, filters, sorter, extra);
  // }

  // const mappedTodos = todos.map((todo) => ({
  //   ...todo,
  //   // isDone: todo.isDone ? "Yes" : "No",
  // }));

  return (
    <Table
      className="todoTable"
      columns={columns}
      dataSource={todos}
      // onRow={(record, rowIndex) => {
      //   return {
      //     onClick: () => {
      //       history.push(`/todo/${record.id}`);
      //     },
      //   };
      // }}
    />
  );
}
