import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Todo from './App'
import registerServiceWorker from './registerServiceWorker'

var tasks = ["Task 1", "Task 2", "Task 3"]

ReactDOM.render(<Todo tasks={tasks} />, document.getElementById('root'))
registerServiceWorker()
