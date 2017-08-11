import React, { Component } from 'react'

class ToDoAppList extends  Component {
  // constructor(props) {
  //   super(props)
  //   console.log(props)
  //   this.remove = this.remove.bind(this)
  //   this.modify = this.modify.bind(this)
  // }

  // modify(elem) {
  //   // var arr = this.props.tasks
  //   // arr.splice(elem, 1)
  //   console.log('mod')
  // }

  // remove(elem) {
  //   // var arr = this.props.tasks
  //   // arr.splice(elem, 1)
  //   var value = elem.target.parentNode.querySelector('tr')
  //   this.props.remove(value)
  // }

  render() {

    console.log(this.props)

    const {tasks, removeTask} = this.props

    console.log(tasks)

    return (
      <table className="table-bordered">
        <tbody>
          {tasks.map((elem, i) => (
            <tr key={elem}>
              <td className="number"> { i + 1 } </td>
              <td className="number">
                <input type="checkbox" />
              </td>
              <td className="name" onClick={this.modify}>
                <span> { elem } </span>
              </td>
              <td className="number">
                <span onClick={ removeTask.bind(this, elem) }>X</span>
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
