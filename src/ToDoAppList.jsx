import React, { Component } from 'react'

class ToDoAppList extends  Component {
  constructor(props) {
    super(props)
      console.log(props)
  }

  remove(elem) {
    var value = elem.target.parentNode.querySelector('span').innerText
    this.props.remove(value)
  }

  render() {
    var task = this.props.tasks.map((elem, i) => {
      return <li key={i}><span>{elem}</span><button onClick={this.remove}>X</button></li>
    })
    return (
      <ul>
        {task}
      </ul>
    )
  }
}

export default ToDoAppList
