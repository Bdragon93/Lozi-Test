import React from 'react';
import TodoList from './todo-list.jsx'
import CreateItem from './create-item.jsx'
import GeneralAction from './general-action.jsx'

const todos = [
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
			todos
		};
	},

	createTask: function(taskName) {
		var tempState = this.state.todos;
		tempState.push({
			task: taskName,
			isDone: false
		});
		this.setState(tempState);
	},

	allDone: function() {
		var tempState = this.state.todos;
		tempState.map(function(task, index) {
			task.isDone = true;
		});
		this.setState(tempState);
	},

	deleteAll: function() {
		var tempState = this.state.todos;
		tempState = [];
		this.setState(tempState);
	},

	taskDone: function(index) {
		var tempState = this.state.todos;
		tempState[index].isDone = true;
		this.setState(tempState);
	},

	taskTodo: function(index) {
		var tempState = this.state.todos;
		tempState[index].isDone = false;
		this.setState(tempState);
	},

	deleteTask: function(index) {
		var tempState = this.state.todos;
		tempState.splice(index, 1);
		this.setState(tempState);
	},

	ascSort: function() {
		var tempState = this.state.todos;
		tempState.sort(function (a, b) {
		  	if (a.task > b.task) {
				return 1;
			}
			if (a.task < b.task) {
				return -1;
			}
			return 0;
		});
		this.setState(tempState);
	},

	descSort: function() {
		var tempState = this.state.todos;
		tempState.sort(function (a, b) {
		  	if (a.task < b.task) {
				return 1;
			}
			if (a.task > b.task) {
				return -1;
			}
			return 0;
		});
		this.setState(tempState);
	},

	shuffleList: function() {
		var tempState = this.state.todos;
		var j, x, i;
		for (i = tempState.length; i; i -= 1) {
			j = Math.floor(Math.random() * i);
			x = tempState[i - 1];
			tempState[i - 1] = tempState[j];
			tempState[j] = x;
    	}
		this.setState(tempState);
	},

	render: function() {
		return (
			<div>
				<h1>Todo App</h1>
				<CreateItem createTask={this.createTask} />
				<TodoList
					todos={this.state.todos}
					taskDone={this.taskDone}
					taskTodo={this.taskTodo}
					deleteTask={this.deleteTask}
				/>
				<GeneralAction
					allDone={this.allDone}
					deleteAll={this.deleteAll}
					ascSort={this.ascSort}
					descSort={this.descSort}
					shuffleList={this.shuffleList}
				/>
			</div>
		)
	}
});

module.exports = App;
