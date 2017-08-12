import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Todo from './App'
import registerServiceWorker from './registerServiceWorker'

var tasksList = [
  {title: "Task 1", done: false},
  {title: "Task 2", done: false},
  {title: "Task 3", done: false}
]

var tasks = localStorage.getItem('storedTasks')

if (tasks) {
  tasksList = JSON.parse(tasks)
}

ReactDOM.render(<Todo tasks={tasksList} />, document.getElementById('root'))
registerServiceWorker()
