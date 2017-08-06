import React, { Component } from 'react'

class ToDoAppList extends  Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.remove = this.remove.bind(this)
  }

  remove(elem) {
    // var arr = this.props.tasks
    // arr.splice(elem, 1)
    var value = elem.target.parentNode.querySelector('tr')
    this.props.remove(value)
  }

  render() {

    const {tasks} = this.props

    return (
      <table className="table-bordered">
        <tbody>
          {tasks.map((elem, i) => (
            <tr key={i}>
              <td className="number"> { i + 1 } </td>
              <td className="number">
                <input type="checkbox" />
              </td>
              <td className="name">
                <span className="done-{{oneTask.status}}"> { elem } </span>
              </td>
              <td className="number">
                <span onClick={this.remove}>X</span>
              </td>
            </tr>
            )
          )}
        </tbody>
      </table>
    )
  }
}

export default ToDoAppList
