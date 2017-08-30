import React, { Component } from 'react'
import DisplayItem from './DisplayItem'
import AddNewTask from './AddNewTask'
import uuidv4 from 'uuid/v4'

import './App.css'

class Todo extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [
        {title: 'Task 1', done: false, id: uuidv4()},
        {title: 'Task 2', done: false, id: uuidv4()},
        {title: 'Task 3', done: false, id: uuidv4()}
      ]
    }

    this.removeTask = this.removeTask.bind(this)
    this.addTask = this.addTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
    this.removeAllTasks = this.removeAllTasks.bind(this)
    this.removeCompletedTasks = this.removeCompletedTasks.bind(this)
  }

  componentDidMount() {
    const storedTasks = localStorage.getItem('storedTasks')

    if (storedTasks) {
      this.setState({
        tasks: JSON.parse(storedTasks)
      })
    }
  }

  addTask(newTodo) {
    this.setState({
      tasks: [
        {title: newTodo, done: false, id: uuidv4()},
        ...this.state.tasks
      ]
    })
  }

  updateTask(updatedTask) {
    const tasks = this.state.tasks.map(task => {
      if(task.id === updatedTask.id) {
        return updatedTask
      }
      return task
    })
    this.setState({tasks})
    this.updateLocalStorage(tasks)
  }

  removeTask(id) {
    const tasks = this.state.tasks.filter((task) =>  task.id !== id)

    this.setState({tasks})
    this.updateLocalStorage(tasks)
  }

  removeAllTasks() {
    const updatedTasks = []
    this.setState({
      tasks: updatedTasks
    })
    this.updateLocalStorage(updatedTasks)
  }

  removeCompletedTasks() {
    const updatedTasks = this.state.tasks.filter((_elem) =>  _elem.done !== true)
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
      <div className="container">
        <h1 className="header">TODO LIST</h1>

        <div className="buttons-row">
          <AddNewTask addTask={this.addTask} />
          <button className="btn btn-success btn-xs" onClick={this.removeCompletedTasks}>Remove Completed</button>
          <button className="btn btn-danger btn-xs" onClick={this.removeAllTasks}>Remove All</button>
        </div>

        <table className="table-bordered">
          <tbody>
            {this.state.tasks.map((task, index) => (
              <DisplayItem
                task={task}
                index={index}
                key={task.id}
                updateTask={this.updateTask}
                removeTask={this.removeTask}
                />
              )
            )}
          </tbody>
        </table>

        <table className="table-bordered table2">
          <tbody>
            <tr>
              <td><p>Total tasks: {this.state.tasks.length} </p></td>
              <td><p>Total tasks done: {this.state.tasks.filter((elem) => elem.done).length} </p></td>
            </tr>
          </tbody>          
        </table>
        <br />
      </div>
    );
  }
}

export default Todo
