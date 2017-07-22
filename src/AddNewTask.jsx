import React, { Component } from 'react'

class AddNewTask extends Component {
  constructor(props) {
    super(props)
    this.newTask = this.newTask.bind(this)
  }

  newTask(event) {
    event.preventDefault()
    var input = event.target.querySelector('input')
    var value = input.value
    input.value = ''
    this.props.updateList(value)
    console.log(value)
  }

  render() {
    return (
      <form onSubmit={this.newTask}>
        <input type="text"/>
      </form>
    )
  }
}

export default AddNewTask
