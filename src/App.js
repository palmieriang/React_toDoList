import React, { Component } from 'react'
import ToDoAppList from './ToDoAppList'
import AddNewTask from './AddNewTask'

import './App.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: props.tasks
    }
    this.updateList = this.updateList.bind(this)
  }

  updateList(text) {
    var updateTasks = this.state.tasks
    updateTasks.push(text)
    this.setState({
      tasks: updateTasks
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <AddNewTask updateList={this.updateList} />
        <ToDoAppList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Todo
