import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import React from "react";
import './app.css'

const listData = [
  {label: 'Drink coffee', important: false, id: 1},
  {label: 'Fly high', important: false, id: 2},
  {label: 'Push elements', important: true, id: 3}
];

const App = () => {
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList listData={ listData }/>
    </div>
  )
};

export default App;