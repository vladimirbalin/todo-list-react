import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import React, {Component} from "react";
import './app.css'
import AddItem from "../add-item";

export default class App extends Component {
  newId = 32515;
  state = {
    listData: [
      this.createItem('Drink Cofee'),
      this.createItem('Fly High'),
      this.createItem('Push elements to the sky')
    ]
  };
  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.newId++
    }
  };
  onToggleProperty = (arr, type, id) => {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = {...oldItem, [type]: !oldItem[type]};
    return [...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)];
  };

  onToggleDone = (id) => {
    this.setState(({ listData }) => {
      return {
        listData: this.onToggleProperty(listData, 'done', id)
      }
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ listData }) => {
      return {
        listData: this.onToggleProperty(listData, 'important', id)
      }
    });
  };

  onAdding = (text) => {
    if(text){
      this.setState(({ listData }) => {
        const newItem = this.createItem(text);
        const newArr = [...listData, newItem];
        return { listData: newArr }
      })
    }
  };
  onDeleted = (id) => {
    this.setState(({ listData }) => {
      return {
        listData: (listData.filter((item) => item.id !== id))
      }
    })
  };
  render() {
    const doneItems = this.state.listData.filter(el => el.done).length;
    const toDoItems = this.state.listData.length - doneItems;
    return (
      <div className="todo-app">
        <AppHeader toDo={toDoItems} done={doneItems}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList listData={ this.state.listData }
                  onDeleted={this.onDeleted}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}/>
        <AddItem onAdding={this.onAdding} />
      </div>
    );
  }
}