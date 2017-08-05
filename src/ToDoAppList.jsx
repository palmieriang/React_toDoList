import React, { Component } from 'react'

class ToDoAppList extends  Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.remove = this.remove.bind(this)
  }

  remove(elem) {
    var value = elem.target.parentNode.querySelector('span').innerText
    this.props.remove(value)
  }

  render() {

    const {tasks} = this.props

    return (
      <ul>
        {tasks.map((elem, i) => (
          <li key={i}><span>{elem}</span><button onClick={this.remove}>X</button></li>
          )
        )}
      </ul>
    )
  }
}

export default ToDoAppList
