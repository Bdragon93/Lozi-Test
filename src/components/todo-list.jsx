import React from 'react';
import TodoItem from './todo-item.jsx'

var TodoList = React.createClass({
	renderItem: function() {
		var self = this;
		return (self.props.todos.map(function(item, i) {
           return (<TodoItem key={i} item={item} index={i}
           				taskDone={self.props.taskDone}
						taskTodo={self.props.taskTodo}
						deleteTask={self.props.deleteTask}
           			/>) ;
        }))
	},

	render: function() {
		return (
			<table>
					<thead>
						<tr>
							<th>Task</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.renderItem()}
					</tbody>
				</table>
		)
	}
});

module.exports = TodoList;
