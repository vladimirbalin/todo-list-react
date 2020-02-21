import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import React, {Component} from "react";
import './app.css'
import AddItem from "../add-item";

export default class App extends Component {
  newId = 1;
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
      id: this.newId++,
      visible: true
    }
  };

  onToggleProperty = (arr, type, id) => {
    const index = arr.findIndex((el) => el.id === id);
    const oldObj = arr[index];
    const newObj = {...oldObj, [type]: !oldObj[type]};
    
    return [...arr.slice(0, index),
            newObj,
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

  onDeleting = (id) => {
    this.setState(({ listData }) => {
      return {
        listData: (listData.filter((item) => item.id !== id))
      }
    })
  };
  onSearch = (text) => {
    this.setState(({ listData }) => {
      const ourData = [...listData];
      ourData.forEach((el, index) => {
        let checkEl = el.label.toLowerCase().indexOf(text.toLowerCase());
        checkEl === -1 ? el.visible = false : el.visible = true;
      });
      return { listData: ourData }
    })
  };
  allDone = () => {
    this.setState(({ listData }) => {
      const ourData = [...listData];
      ourData.forEach(el => {
        el.done === true ? el.visible = true : el.visible = false;
      });
      return { listData: ourData }
    })
  };
  allActive = () => {
    this.setState(({ listData }) => {
      const ourData = [...listData];
      ourData.forEach(el => {
        el.done === false ? el.visible = true : el.visible = false;
      });
      return { listData: ourData }
    })
  };
  allShow = () => {
    this.setState(({ listData }) => {
      const ourData = [...listData];
      ourData.forEach(el => {
        el.visible = true;
      });
      return { listData: ourData }
    })
  };

  render() {
    const doneItems = this.state.listData.filter(el => el.done).length;
    const toDoItems = this.state.listData.length - doneItems;
    return (
      <div className="todo-app">
        <AppHeader toDo={toDoItems} done={doneItems}/>
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch}/>
          <ItemStatusFilter allDone={this.allDone}
                            allActive={this.allActive}
                            allShow={this.allShow}/>
        </div>
        <TodoList listData={ this.state.listData }
                  onDeleting={this.onDeleting}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}/>
        <AddItem onAdding={this.onAdding} />
      </div>
    );
  }
}