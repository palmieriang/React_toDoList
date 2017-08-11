import React, { Component } from 'react'

class DisplayItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false
		}
    this.handleDone = this.handleDone.bind(this)
	}

  handleDone() {
    var _done = !this.state.done
    this.setState({
      done: _done
    })
  }

	render() {

		const {elem, removeTask, i} = this.props

		return (
      <tr>
        <td className="number"> { i + 1 } </td>
        <td className="number">
          <input type="checkbox" checked={this.state.done} onChange={this.handleDone} />
        </td>
        <td className="name" onClick={this.modify}>
          <span> { elem } </span>
        </td>
        <td className="number">
          <span onClick={ removeTask.bind(this, elem) }>X</span>
        </td>
      </tr>
		)
	}
}

export default DisplayItem
