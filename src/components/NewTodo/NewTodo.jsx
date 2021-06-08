import React from "react";
import { Formik, Form, useField } from "formik";

const TodoInputs = () => {
  const [field1] = useField("task");
  const [field2] = useField("about");
  const [field3] = useField("hoursLeft");
  const [field4] = useField("additionalInfo");
  const [field5] = useField("rating");
  return (
    <div>
      <input {...field1} className="msfForF1" />
      <input {...field2} className="msfForF2" />
      <input {...field3} className="msfForF3" />
      <input {...field4} className="msfForF3" />
      <input {...field5} className="msfForF3" />
    </div>
  );
};

const TodoAdd = (props) => {
  const handleSubmit = (newTodo) => {
    props.setTodos([...props.todos, {...newTodo, isAboutVisible: false, id: props.todos.length+1, key: props.todos.length+1 }]);
  };
  return (
    <div className="mydiv">
      <Formik
        initialValues={{
          // id: 2,
          task: "task2",
          // isDone: false,
          about: "lorem ipsum....",
          hoursLeft: 0,
          additionalInfo: 'None',
          rating: 5
        }}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <Form className="myform">
              <div className="nextdiv">
                <TodoInputs />
                <button type="submit" className="myButton">
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TodoAdd;
// wszedzie ENTERY
