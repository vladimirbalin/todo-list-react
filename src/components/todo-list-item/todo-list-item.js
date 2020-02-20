import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false
  };
  clickHandler = () => {
    this.setState({
      done: true
    })
  };
  render(){
    const { label, important = false } = this.props;
    const { done } = this.state;
    const style = {
      color: important ? 'tomato' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
    let classNames = 'todo-list-item';
    if(done){
      classNames += ' done';
    }

    return (
      <div className={classNames}>
      <span
        onClick={this.clickHandler}
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </div>
    )
  }
}