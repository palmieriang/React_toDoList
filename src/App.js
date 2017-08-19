import React, { Component } from 'react'
import DisplayItem from './DisplayItem'
import AddNewTask from './AddNewTask'

import './App.css'

var tasksList = [
  {title: 'Task 11', done: false},
  {title: 'Task 2', done: false},
  {title: 'Task 3', done: false}
]

class Todo extends Component {
  constructor() {
    super()

    this.state = {
      tasks: tasksList
    }

    this.updateList = this.updateList.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  componentDidMount() {
    const storedTasks = localStorage.getItem('storedTasks')

    if (storedTasks) {
      this.setState({
        tasks: JSON.parse(storedTasks)
      })
    }
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

  removeTask(task) {
    // 1st way
    // var updatedTasks = this.state.tasks
    // updatedTasks.splice(updatedTasks.indexOf(text), 1)

    // 2nd way
    var updatedTasks = this.state.tasks.filter((_elem) =>  _elem !== task)

    this.setState({
      tasks: updatedTasks
    })
    // this.updateLocalStorage(updatedTasks)
  }

  updateLocalStorage(updatedTasks) {
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks))
  }

  render() {
    return (
      <div className='container'>
        <h1 className='header'>To Do List</h1>
        <p>Number of total tasks: {this.state.tasks.length} </p>
        <p>Number of total tasks done: {this.state.tasks.filter((elem) => elem.done).length} </p>
        <AddNewTask updateList={this.updateList} />

        <table className="table-bordered">
          <tbody>
            {this.state.tasks.map((task, index) => (
              <DisplayItem task={task} index={index} key={index} removeTask={this.removeTask.bind(null, task)} />
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Todo
