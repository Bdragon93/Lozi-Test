import React from 'react';

var FilterAction = React.createClass({
	onChangeFilter: function(filter) {
		this.props.changeFilter(filter);
	},

	render: function() {
		return (
			<footer>
				<ul>
					<li>
						<a href='javascript:;' onClick={this.onChangeFilter.bind(this,null)} >All</a>
					</li>
					<li>
						<a href='javascript:;' onClick={this.onChangeFilter.bind(this,true)} >Done</a>
					</li>
					<li>
						<a href='javascript:;' onClick={this.onChangeFilter.bind(this,false)} >To do</a>
					</li>
				</ul>
			</footer>
		)
	}
});

module.exports = FilterAction;
