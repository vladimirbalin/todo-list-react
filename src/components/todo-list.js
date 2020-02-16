import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {

  return (
    <ul>
      <li><TodoListItem name="Drink Coffee" /></li>
      <li><TodoListItem name="Drink Beer" /></li>
      <li><TodoListItem name="Drink Deer" /></li>
    </ul>
  );
};

export default TodoList;