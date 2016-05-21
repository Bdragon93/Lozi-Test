import React from 'react';

var FilterAction = React.createClass({
	onShowALl: function() {
		this.props.allDone();
	},

	onShowDone: function() {
		this.props.deleteAll();
	},

	onShowTodo: function() {
		this.props.ascSort();
	},

	render: function() {
		return (
			<footer>
				<ul>
					<li>
						<a href='javascript:;' onClick={this.onShowALl} >All</a>
					</li>
					<li>
						<a href='javascript:;' onClick={this.onShowDone} >Done</a>
					</li>
					<li>
						<a href='javascript:;' onClick={this.onShowTodo} >To do</a>
					</li>
				</ul>
			</footer>
		)
	}
});

module.exports = FilterAction;
