import React, { createRef } from "react";
import './add-item.css'



const AddItem = ( { onAdding }) => {
  const inputRef = createRef();
  function clickHandler() {
    onAdding(inputRef.current.value);
    inputRef.current.value = '';
  }
  return (
    <div className='add-item d-flex'>
      <input className='form-control add-input' type='text'
             placeholder='type to add'
             ref={inputRef} />
      <button onClick={clickHandler} className='btn btn-success btn-add'>Add</button>
    </div>
  )
};

export default AddItem;