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

  modifyTask(text) {
    this.setState({
      tasks: text
    })
    this.updateLocalStorage(text)
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
      <div className='container'>
        <h1 className='header'>To Do List</h1>
        <AddNewTask updateList={this.updateList} />
        <ToDoAppList tasks={this.state.tasks} modify={this.modifyTask} remove={this.removeTask} />
      </div>
    );
  }
}

export default Todo
