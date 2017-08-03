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
    this.removeTask = this.removeTask.bind(this)
  }

  updateList(text) {
    var updatedTasks = this.state.tasks
    updatedTasks.unshift(text)
    this.setState({
      tasks: updatedTasks
    })
    this.updateLocalStorage(updatedTasks)
  }

  removeTask(text) {
    var updatedTasks = this.state.tasks
    updatedTasks.splice(updatedTasks.indexOf(text), 1)
    this.setState({
      tasks: updatedTasks
    })
    this.updateLocalStorage(updatedTasks)
  }

  updateLocalStorage(updatedTasks) {
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks))
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <AddNewTask updateList={this.updateList} />
        <ToDoAppList tasks={this.state.tasks} remove={this.removeTask} />
      </div>
    );
  }
}

export default Todo
