import React, { Component } from 'react'
import PropTypes from 'prop-types'
import rubbish from './images/rubbish.svg'

class DisplayItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
      value: this.props.task.title,
      editing: false
    }
    this.handleDone = this.handleDone.bind(this)
    this.edit = this.edit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
	}

  handleDone() {
    this.props.updateTask({
      ...this.props.task,
      done: !this.props.task.done
    })
  }

  edit() {
    this.setState({
      value: this.props.task.title,
      editing: !this.state.editing
    })
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.updateTask({
      ...this.props.task,
      title: this.state.value
    })
    this.setState({
      editing: false
    })
  }

  render() {
    const {task, removeTask, index} = this.props
    const {value, editing} = this.state

		return (
      <tr>
        <td className="number">{index + 1}</td>
        <td className="number">
          <input type="checkbox" checked={task.done} onChange={this.handleDone} />
        </td>
        <td className={`name ${task.done ? 'done' : ''}`}>
          {!editing && <span onClick={this.edit}>{task.title}</span>}
          {editing && <form onSubmit={this.handleSubmit}><input type="text" value={value} onChange={this.handleChange} /></form>}
        </td>
        <td className="number">
          <span onClick={() => removeTask(task.id)}>
            <img src={rubbish} className="icon" alt="rubbish-icon" />
          </span>
        </td>
      </tr>
		)
	}
}

DisplayItem.propTypes = {
  task: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
}

export default DisplayItem
