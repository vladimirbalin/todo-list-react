import React, {useState} from 'react';

import './search-panel.css';

export default function SearchPanel(props) {
    const [input, setInput] = useState({label: ''});

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput({
          label: value
        });
        props.onSearch(value);
        if (value === '') {
            props.onSearch('');
        }
    };
    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search"
               onChange={onChangeHandler}
               value={input.label}
        />
    );
};
