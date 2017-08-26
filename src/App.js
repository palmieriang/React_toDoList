import React, { Component } from 'react'
import DisplayItem from './DisplayItem'
import AddNewTask from './AddNewTask'

import './App.css'

const uuidv4 = require('uuid/v4')

var tasksList = [
  {title: 'Task 1', done: false, editing: false, id: uuidv4()},
  {title: 'Task 2', done: false, editing: false, id: uuidv4()},
  {title: 'Task 3', done: false, editing: false, id: uuidv4()}
]

class Todo extends Component {
  constructor() {
    super()

    this.state = {
      tasks: tasksList
    }

    this.updateList = this.updateList.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.addTask = this.addTask.bind(this)
    this.modifyTask = this.modifyTask.bind(this)
    this.doneTask = this.doneTask.bind(this)
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
        ...this.state.tasks]
    })
  }

  updateList(text) {
    const updatedTasks = this.state.tasks
    updatedTasks.unshift(text)
    this.setState({
      tasks: updatedTasks
    })
    // this.updateLocalStorage(updatedTasks)
  }

  doneTask(done, id) {
    const updatedTasks = this.state.tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          done: done
        }
      }
      return task
    })
    this.setState({
      tasks: updatedTasks
    })
    // this.updateLocalStorage(text)
  }

  modifyTask(text, id) {
    const updatedTasks = this.state.tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          title: text
        }
      }
      return task
    })
    this.setState({
      tasks: updatedTasks
    })
    // this.updateLocalStorage(text)
  }

  removeTask(task) {
    // 1st way
    // var updatedTasks = this.state.tasks
    // updatedTasks.splice(updatedTasks.indexOf(text), 1)

    // 2nd way
    const updatedTasks = this.state.tasks.filter((_elem) =>  _elem !== task)

    this.setState({
      tasks: updatedTasks
    })
    // this.updateLocalStorage(updatedTasks)
  }

  removeAllTasks() {
    this.setState({
      tasks: []
    })
    // this.updateLocalStorage(updatedTasks)
  }

  removeCompletedTasks() {

  }

  // updateLocalStorage(updatedTasks) {
  //   localStorage.setItem('storedTasks', JSON.stringify(updatedTasks))
  // }

  render() {
    console.log(this.state.tasks)
    return (
      <div className='container'>
        <h1 className='header'>To Do List</h1>
        {
        // <p>Number of total tasks: {this.state.tasks.length} </p>
        // <p>Number of total tasks done: {this.state.tasks.filter((elem) => elem.done).length} </p>
        }
        <AddNewTask updateList={this.updateList} addTask={this.addTask} />

        <div className='buttons-row'>
          <button className='btn btn-success btn-xs' onClick={this.removeCompletedTasks}>Remove Completed</button>
          <button className='btn btn-danger btn-xs' onClick={this.removeAllTasks}>Remove All</button>
        </div>

        <table className="table-bordered">
          <tbody>
            {this.state.tasks.map((task, index) => (
              <DisplayItem
                task={task}
                index={index}
                key={task.id}
                removeTask={this.removeTask}
                modifyTask={this.modifyTask}
                doneTask={this.doneTask}
                />
              )
            )}
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}

export default Todo
