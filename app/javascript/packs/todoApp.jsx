import React from 'react';
import ReactDom from 'react-dom';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
    this.handleFnChange = this.handleFnChange.bind(this);
    this.handleFnSubmit = this.handleFnSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO APP</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleFnSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input id="new-todo" onChange={this.handleFnChange} value={this.state.text} />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleFnChange(e) {
    this.setState({ text: e.target.value });
  }

  handleFnSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(state => ({
      items: this.state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item =>(
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(<TodoApp />, document.getElementById('todo'));
})