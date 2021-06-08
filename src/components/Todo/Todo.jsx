import React from "react";
import "./Todo.css";

import { useParams, useHistory } from "react-router-dom";
import { Button, Modal } from "antd";

export default function Todo({ todos, setTodos }) {
  const params = useParams();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    history.push("/todo-list");
  };

  const deleteTodo = () => {
    setTodos([
      ...todos.filter((todo) => (`${todo.id}` === params.id ? false : true)),
    ]);
    showModal();
  };

  const todo = todos.find((todo) => `${todo.id}` === params.id);

  return (
    <>
      {!!todo && (
        <>
          <div>{todo.task}</div>
          <div>{todo.about}</div>
          <div>{todo.hoursLeft}</div>
          <div>{todo.additionalInfo}</div>

          <Button
            onClick={() => {
              deleteTodo();
            }}
          >
            Delete
          </Button>
        </>
      )}
      <Modal
        visible={isModalVisible}
        footer={[
          <Button key="ok" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <p>Todo was deleted</p>
      </Modal>
    </>
  );
}
