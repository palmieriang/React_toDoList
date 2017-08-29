import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DisplayItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
      value: this.props.task.title,
      editing: false
    }
    this.handleDone = this.handleDone.bind(this)
    this.handleModify = this.handleModify.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
	}

  handleDone(event, id) {
    var _done = !this.props.task.done
    this.props.doneTask(_done, id)
  }

  handleModify() {
    var _editing = !this.state.editing
    this.setState({
      value: this.props.task.title,
      editing: _editing
    })
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event, id) {
    event.preventDefault()
    this.props.modifyTask(this.state.value, id)
    this.setState({
      editing: false
    })
  }

  render() {

    console.log(this.props)

    const {task, removeTask, index} = this.props

		return (
      <tr>
        <td className="number"> { index + 1 } </td>
        <td className="number">
          <input type="checkbox" checked={task.done} onChange={(event, id) => this.handleDone(event, task.id)} />
        </td>
        <td className={"name " + (task.done ? 'done' : '')}>
          {!this.state.editing && <span onClick={this.handleModify}> { task.title } </span>}
          {this.state.editing && <form onSubmit={(event, id) => this.handleSubmit(event, task.id)}><input type='text' value={this.state.value} onChange={this.handleChange} /></form>}
        </td>
        <td className="number">
          <span onClick={ removeTask.bind(this, task) }>X</span>
        </td>
      </tr>
		)
	}
}

DisplayItem.propTypes = {
  task: PropTypes.object.isRequired,
  doneTask: PropTypes.func.isRequired,
  modifyTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
}

export default DisplayItem
