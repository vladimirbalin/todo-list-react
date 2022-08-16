import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import React, {useEffect, useState} from "react";
import './app.css'
import AddItem from "../add-item";
import {v4 as uuidv4} from 'uuid';

const initialState = {
    listData: [],
    filter: ''
};


export default function App() {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        setState({
            listData: [
                createItem('Drink Coffee'),
                createItem('Clean the room'),
                createItem('Push elements to the sky')
            ],
            filter: 'all'
        });
    }, [])

    function createItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: uuidv4(),
            visible: true
        }
    }

    function onToggleDone(id) {
        setState(({listData, filter}) => {
            return {
                listData: onToggleProperty(listData, 'done', id),
                filter
            }
        });
    }

    function onToggleProperty(arr, type, id) {
        const index = arr.findIndex((el) => el.id === id);
        const oldObj = arr[index];
        const newObj = {...oldObj, [type]: !oldObj[type]};

        return [...arr.slice(0, index),
            newObj,
            ...arr.slice(index + 1)];
    }

    function onToggleImportant(id) {
        setState(({listData, filter}) => {
            return {
                listData: onToggleProperty(listData, 'important', id),
                filter
            }
        });
    }

    function onAdding(text) {
        if (text) {
            setState(({listData, filter}) => {
                const newItem = createItem(text);
                const newArr = [...listData, newItem];
                return {listData: newArr, filter}
            })
        }
    }

    function onDeleting(id) {
        setState(({listData, filter}) => {
            return {
                listData: (listData.filter((item) => item.id !== id)),
                filter
            }
        })
    }

    function onSearch(text) {
        setState(({listData, filter}) => {
            const newList = listData.map((el, index) => {
                let checkEl = el.label.toLowerCase().indexOf(text.toLowerCase());
                checkEl === -1 ? el.visible = false : el.visible = true;

                return el;
            });
            return {listData: newList, filter}
        })
    }

    function filterItems(items, filter) {
        return filter === 'all' ? items :
            filter === 'active' ? items.filter((item) => !item.done) :
                filter === 'done' ? items.filter((item) => item.done) : items;
    }

    function onFilterChange(filter) {
        setState({listData, filter});
    }

    const {filter, listData} = state;
    const doneItems = listData.filter(el => el.done).length;
    const toDoItems = listData.length - doneItems;
    const visibleCheckList = listData.filter(el => el.visible);
    const showingItems = filterItems(visibleCheckList, filter);

    return (
        <div className="todo-app">
            <AppHeader toDo={toDoItems} done={doneItems}/>
            <div className="top-panel d-flex">
                <SearchPanel onSearch={onSearch}/>
                <ItemStatusFilter onFilterChange={onFilterChange}
                                  filter={filter}/>
            </div>
            <TodoList showingItems={showingItems}
                      onDeleting={onDeleting}
                      onToggleDone={onToggleDone}
                      onToggleImportant={onToggleImportant}/>
            <AddItem onAdding={onAdding}/>
        </div>
    );
}