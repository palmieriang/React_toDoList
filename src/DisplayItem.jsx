import React, { Component } from 'react'

class DisplayItem extends Component {
	constructor() {
		super()
		this.state = {
			done: false,
      editing: false
		}
    this.handleDone = this.handleDone.bind(this)
    this.handleModify = this.handleModify.bind(this)
	}

  handleDone() {
    var _done = !this.state.done
    this.setState({
      done: _done
    })
  }

  handleModify() {
    var _editing = !this.state.editing
    this.setState({
      editing: _editing
    })
  }

	render() {

		const {task, removeTask, index} = this.props

		return (
      <tr>
        <td className="number"> { index + 1 } </td>
        <td className="number">
          <input type="checkbox" checked={this.state.done} onChange={this.handleDone} />
        </td>
        <td className={"name " + (this.state.done ? 'done' : '')} onClick={this.handleModify}>
          {!this.state.editing && <span> { task.title } </span>}
          {this.state.editing && <span> { task.title } </span>}          
        </td>
        <td className="number">
          <span onClick={ removeTask.bind(this, task) }>X</span>
        </td>
      </tr>
		)
	}
}

export default DisplayItem
