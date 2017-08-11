import React, { Component } from 'react'
import DisplayList from './DisplayList'
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
    // 1st way
    // var updatedTasks = this.state.tasks
    // updatedTasks.splice(updatedTasks.indexOf(text), 1)

    // 2nd way
    var updatedTasks = this.state.tasks.filter((_elem) => {
      return _elem !== text
    })

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
        <DisplayList tasks={this.state.tasks} modify={this.modifyTask} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default Todo
