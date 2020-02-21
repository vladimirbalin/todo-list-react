import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: ''
    };
  }

  onChangeHandler = (e) => {
    // this.setState({
    //   label: e.target.value
    // });
    this.props.onSearch(e.target.value);
    if(e.target.value === ''){
      this.props.onSearch('');
    }
  };
  render() {
    return (
      <input type="text"
             className="form-control search-input"
             placeholder="type to search"
             onChange={this.onChangeHandler}
             />
    );
  }
};
