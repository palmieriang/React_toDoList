import React, { Component } from 'react'
import DisplayItem from './DisplayItem'

class DisplayList extends Component {
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

    const {tasks, removeTask} = this.props

    return (
      <table className="table-bordered">
        <tbody>
          {tasks.map((elem, i) => (
            <DisplayItem elem={elem} i={i} key={elem} removeTask={removeTask.bind(null, elem)} />
            )
          )}
        </tbody>
      </table>
    )
  }
}

export default DisplayList
