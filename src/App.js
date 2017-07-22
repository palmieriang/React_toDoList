import React, { Component } from 'react'
import ToDoAppList from './ToDoAppList'
import AddNewTask from './AddNewTask'

import './App.css'

class Todo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <AddNewTask />
        <ToDoAppList tasks={this.props.tasks} />
      </div>
    );
  }
}

export default Todo
