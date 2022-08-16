import React from "react";
import './todo-list-item.css';

const TodoListItem = ({ label, onDeleting, onToggleDone, onToggleImportant, done, important }) => {
    let classNames = 'todo-list-item';
    if(done){
      classNames += ' done';
    }
    if(important){
      classNames += ' important';
    }

    return (
      <div className={classNames}>
      <span
        onClick={onToggleDone}
        className="todo-list-item-label">
        {label}
      </span>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleting}>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    )
};

export default TodoListItem;