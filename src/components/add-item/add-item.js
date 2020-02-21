import React, { Component } from "react";
import './add-item.css'

export default class AddItem extends Component {
  inputRef = React.createRef();
  state = {
    label: ''
  };

  changeHandler = (e) => {
    this.setState({
      label: e.target.value
    })
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.onAdding(this.state.label);
    this.setState({
      label: ''
    });
    this.inputRef.current.focus();
  };

  render(){
    return (
      <form onSubmit={this.submitHandler} className='add-item d-flex'>
        <input className='form-control add-input' type='text'
               placeholder='type to add'
               ref={this.inputRef}
               onChange={this.changeHandler}
               value={this.state.label}/>
        <button className='btn btn-success btn-add'>Add</button>
      </form>
    );
  }
}

