import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {
  clickHandler = (e) => {
    console.log('hello');
  };
  render() {
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={this.props.allShow}>All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.props.allActive}>Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.props.allDone}>Done</button>
      </div>
    );
  }
}

