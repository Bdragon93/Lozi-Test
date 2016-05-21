import React from 'react';
import TodoList from '../todo-list.jsx'
import CreateItem from '../create-item.jsx'
import FilterAction from './filter-action.jsx'

var FilterSection = React.createClass({
	getInitialState: function() {
		return {
			listTask: this.props.listTask
		};
	},

	renderItem: function() {
		var self = this;
		return (self.state.listTask.map(function(item, i) {
           return (<tr>
           				<td>{item.task}</td>
           			</tr>
           	);
        }))
	},

	render: function() {
		return (
			<section>
				<h2>Filter Section</h2>
				<table>
					<thead>
						<tr>
							<th>Task</th>
						</tr>
					</thead>
					<tbody>
						{this.renderItem()}
					</tbody>
				</table>
				<FilterAction
					showALl={this.allDone}
					showDone={this.deleteAll}
					showTodo={this.ascSort}
				/>
			</section>
		)
	}
});

module.exports = FilterSection;
