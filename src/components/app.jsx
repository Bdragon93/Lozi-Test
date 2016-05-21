import React from 'react';
import TodoSection from './todo-section.jsx'
import FilterSection from './filter/filter-section.jsx'

const data = [
	{
		task: 'eat',
		isDone: true
	},
	{
		task: 'drink',
		isDone: false
	},
	{
		task: 'work',
		isDone: true
	},
]

var App = React.createClass({
	getInitialState: function() {
		return {
			listTask: data
		};
	},

	changeState: function(newState) {
		this.setState({listTask: newState})
	},

	render: function() {
		return (
			<div>
				<TodoSection
					listTask={this.state.listTask}
					changeState={this.changeState}
				/>
				<FilterSection listTask={this.state.listTask} />
			</div>
		)
	}
});

module.exports = App;
