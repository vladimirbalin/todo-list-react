import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'

const TodoList = ({ listData, onDeleting, onToggleDone, onToggleImportant}) => {
  const visibleCheckList = listData.filter(el => el.visible);
  const elements =  visibleCheckList.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li className={'list-group-item'} key={id}>
        <TodoListItem { ...itemProps}
                      onDeleting={() => {onDeleting(id)}}
                      onToggleDone={() => {onToggleDone(id)}}
                      onToggleImportant={() => {onToggleImportant(id)}} />
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