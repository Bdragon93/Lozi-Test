import React from 'react';

var GeneralAction = React.createClass({
	onAllDone: function() {
		this.props.allDone();
	},

	onDeleteAll: function() {
		this.props.deleteAll();
	},

	onAscSort: function() {
		this.props.ascSort();
	},

	onDescSort: function() {
		this.props.descSort();
	},

	onShuffle: function() {
		this.props.shuffle();
	},

	render: function() {
		return (
			<footer>
				<ul>
					<li>
						<a href='javascript:;' onClick={this.onAllDone} >All done</a>
					</li>
					<li>
						<a href='javascript:;' onClick={this.onDeleteAll} >Delete all</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href='javascript:;' onClick={this.onAscSort} >Asc Sort</a>
					</li>
					<li>
						<a href='javascript:;' onClick={this.onDescSort} >Desc Sort</a>
					</li>
					<li>
						<a href='javascript:;' onClick={this.onShuffle} >Shuffle</a>
					</li>
				</ul>
			</footer>
		)
	}
});

module.exports = GeneralAction;
