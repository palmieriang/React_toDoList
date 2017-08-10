import React, { Component } from 'react'

class AddNewTask2 extends Component {
	constructor(props) {
		super(props);
		this.state = {text: '', items: []}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		var text = this.state.text
		var newItems = this.state.items.concat(text)
		console.log('form submitted', text)
		this.setState({ text: '', items: newItems })
	}

	handleChange(event) {
		var text = event.target.value
		this.setState({ text: text })
	}

	render() {
		return (
			<div>
				<form className='new-task' onSubmit={this.handleSubmit}>
					<input type='text' placeholder='Add a task2...' onChange={this.handleChange} value={this.state.text} ></input>
					<button>Add</button>
				</form>
				<p> {this.state.items.toString()} </p>
			</div>
		)
	}
}

export default AddNewTask2
