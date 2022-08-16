import React, {useRef, useState} from "react";
import './add-item.css'

export default function AddItem(props) {
  const [input, setInput] = useState({label: ''  });
  const inputRef = useRef();

  const changeHandler = (e) => {
    setInput({
      label: e.target.value
    })
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdding(input.label);
    setInput({
      label: ''
    });
    inputRef.current.focus();
  };

    return (
      <form onSubmit={submitHandler} className='add-item d-flex'>
        <input className='form-control add-input' type='text'
               placeholder='type to add'
               ref={inputRef}
               onChange={changeHandler}
               value={input.label}/>
        <button className='btn btn-success btn-add'>Add</button>
      </form>
    );
}

