import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'

const TodoList = ({ listData }) => {
  const elements =  listData.map((item) => {
    const { id, ...labelPlusImportant} = item;
    return (
      <li className={'list-group-item'} key={id}>
        <TodoListItem {...labelPlusImportant} />
      </li>
    )
  });

  return (
    <ul className={'list-group todo-list'}>
      { elements }
    </ul>
  )
};

export default TodoList;