import React from 'react';
import TodoList from './todo-list.jsx'
import CreateItem from './create-item.jsx'
import GeneralAction from './general-action.jsx'

var TodoSection = React.createClass({
	changeState: function(newState) {
		this.props.changeState(newState);
	},

	createTask: function(taskName) {
		var tempState = this.props.listTask;
		tempState.push({
			task: taskName,
			isDone: false
		});
		this.changeState(tempState)
	},

	allDone: function() {
		var tempState = this.props.listTask;
		tempState.map(function(task, index) {
			task.isDone = true;
		});
		this.changeState(tempState)
	},

	deleteAll: function() {
		var tempState = this.props.listTask;
		tempState = [];
		this.changeState(tempState)
	},

	taskDone: function(index) {
		var tempState = this.props.listTask;
		tempState[index].isDone = true;
		this.changeState(tempState)
	},

	taskTodo: function(index) {
		var tempState = this.props.listTask;
		tempState[index].isDone = false;
		this.changeState(tempState)
	},

	deleteTask: function(index) {
		var tempState = this.props.listTask;
		tempState.splice(index, 1);
		this.changeState(tempState)
	},

	ascSort: function() {
		var tempState = this.props.listTask;
		tempState.sort(function (a, b) {
		  	if (a.task > b.task) {
				return 1;
			}
			if (a.task < b.task) {
				return -1;
			}
			return 0;
		});
		this.changeState(tempState)
	},

	descSort: function() {
		var tempState = this.props.listTask;
		tempState.sort(function (a, b) {
		  	if (a.task < b.task) {
				return 1;
			}
			if (a.task > b.task) {
				return -1;
			}
			return 0;
		});
		this.changeState(tempState)
	},

	shuffleList: function() {
		var tempState = this.props.listTask;
		var j, x, i;
		for (i = tempState.length; i; i -= 1) {
			j = Math.floor(Math.random() * i);
			x = tempState[i - 1];
			tempState[i - 1] = tempState[j];
			tempState[j] = x;
    	}
		this.changeState(tempState)
	},

	render: function() {
		return (
			<section>
				<h2>Todo Section</h2>
				<CreateItem createTask={this.createTask} />
				<TodoList
					listTask={this.props.listTask}
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
			</section>
		)
	}
});

module.exports = TodoSection;
