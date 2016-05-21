import React from 'react';

var TodoList = React.createClass({
	renderAction: function() {
		var self = this;
		if(!self.props.item.isDone) {
			return (
				<button onClick={self.onDone} >Done</button>
			);
		} else {
			return (
				<button onClick={self.onTodo} >To do</button>
			);
		}
	},

	onDone: function() {
		this.props.taskDone(this.props.index);
	},

	onTodo: function() {
		this.props.taskTodo(this.props.index);
	},

	onDelete: function() {
		this.props.deleteTask(this.props.index);
	},

	render: function () {
		return (
			<tr>
				<td>{this.props.item.task}</td>
				<td>
					{this.renderAction()}
					<button onClick={this.onDelete} >Delete</button>
				</td>
			</tr>
		)
	}
});

module.exports = TodoList;
