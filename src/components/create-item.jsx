import React from 'react';


var ENTER_KEY = 13;

var CreateItem = React.createClass({
	onCreate: function() {
		this.props.createTask(this.refs.newTaskInput.value);
		this.refs.newTaskInput.value = '';
	},

	handleCreateKey: function(event) {
		var self = this;
		if (event.keyCode === ENTER_KEY) {
			self.onCreate();
		}
	},

	render: function () {
		return (
			<div>
				<input ref='newTaskInput'
					placeholder='Enter the new task...'
					onKeyDown={this.handleCreateKey}
					onChange={this.handleChange}
				/>
				<button onClick={this.onCreate} >Create</button>
			</div>
		)
	}
});

module.exports = CreateItem;
