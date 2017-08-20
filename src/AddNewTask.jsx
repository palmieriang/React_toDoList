import React, { Component } from 'react'

class AddNewTask extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addTask(this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form className='new-task' onSubmit={(event) => this.handleSubmit(event)}>
        <input type='text' placeholder='Add a task...' value={this.state.value} onChange={this.handleChange} />
      </form>
    )
  }
}

export default AddNewTask
