import React, { Component } from 'react'

class ToDoAppList extends  Component {
  constructor(props) {
    super(props)

  }

  render() {
    var task = this.props.tasks.map((elem, i) => {
      return <li key={i}>{elem}</li>
    })
    return (
      <ul>
        {task}
      </ul>
    )
  }
}

export default ToDoAppList
