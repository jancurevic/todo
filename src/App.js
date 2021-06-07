import React, {useState} from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoAdd from "./components/NewTodo/NewTodo";
import Todo from "./components/Todo/Todo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "task1",
      // isDone: true,
      about: "lorem  ipsum....",
      hoursLeft: 15,
      additionalInfo: 'lorem ipsum....',
      rating: 1,
      isAboutVisible: false
    },
    {
      id: 2,
      task: "task2",
      // isDone: false,
      about: "lorem ipsum....",
      hoursLeft: 13,
      additionalInfo: 'lorem ipsum....',
      rating: 2,
      isAboutVisible: false
    },
    {
      id: 3,
      task: "task3",
      // isDone: false,
      about: "lorem ipsum....",
      hoursLeft: 17,
      additionalInfo: 'lorem ipsum....',
      rating: 3,
      isAboutVisible: false
    },
    {
      id: 4,
      task: "task4",
      // isDone: false,
      about: "lorem ipsum....",
      hoursLeft: 20,
      additionalInfo: 'lorem ipsum....',
      rating: 4,
      isAboutVisible: false
    },
    {
      id: 5,
      task: "task5",
      // isDone: false,
      about: "lorem ipsum....",
      hoursLeft: 1,
      additionalInfo: 'lorem ipsum....',
      rating: 5,
      isAboutVisible: false
    },
    {
      id: 6,
      task: "task6",
      // isDone: false,
      about: "lorem ipsum....",
      hoursLeft: 5,
      additionalInfo: 'lorem ipsum....',
      rating: 6,
      isAboutVisible: false
    },
  ]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/todo-list">Todo List</Link>
            </li>
            <li>
              <Link to="/new-todo">Create new</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/new-todo">
            <TodoAdd todos={todos} setTodos={setTodos}/>
          </Route>
          <Route path="/todo/:id">
            <Todo todos={todos} setTodos={setTodos}/>
          </Route>
          <Route path="/todo-list">
            <TodoList todos={todos} setTodos={setTodos}/>
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <TodoList />
    // </div>
  );
}

export default App;
