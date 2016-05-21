import React from 'react';
import TodoList from '../todo-list.jsx'
import CreateItem from '../create-item.jsx'
import FilterAction from './filter-action.jsx'

var FilterSection = React.createClass({
	count: 0,
	getInitialState: function() {
		return {
			filter: null,
			listTask: this.props.listTask
		};
	},

	// componentWillUpdate: function(nextProps, nextState) {
	// 	var self = this;
	// 	// var filterState = self.state.filter;
	// 	if (nextState.filter === 'Done') {
	// 		var tempState = [];
	// 		nextProps.listTask.map(function(item, index) {
	// 			if (item.isDone === true) {
	// 				tempState.push(item);
	// 			};
	// 		});
	// 		self.setState({
	// 			listTask: tempState
	// 		});
	// 	} else if (nextState.filter === 'Todo') {
	// 		var tempState = [];
	// 		nextProps.listTask.map(function(item, index) {
	// 			if (item.isDone === false) {
	// 				tempState.push(item);
	// 			};
	// 		});
	// 		self.setState({
	// 			listTask: tempState
	// 		});
	// 	} else {
	// 		self.setState({
	// 			listTask: nextProps.listTask
	// 		});
	// 	};
	// },

	renderItem: function() {
		var self = this;
		var filterState = self.state.filter;
		self.count = 0;
		return (self.state.listTask.map(function(item, index) {
			if (filterState === item.isDone || filterState === null) {
				self.count += 1;
				return (<tr key={index} >
							<td>{item.task}</td>
						</tr>
				);
			} else {
				return null;
			}
		}))
	},

	changeFilter: function (filter) {
		this.setState({
			filter: filter
		});
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
				<p>Number of tasks: {this.count}</p>
				<FilterAction changeFilter={this.changeFilter} />
			</section>
		)
	}
});

module.exports = FilterSection;
