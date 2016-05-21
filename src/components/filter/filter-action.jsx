import React from 'react';

var FilterAction = React.createClass({
	onChangeFilter: function(filter) {
		this.props.changeFilter(filter);
	},

	render: function() {
		return (
			<footer>
				<ul className='action-outer'>
					<li className='action-item'>
						<a className={this.props.filter === null ? 'btn-action selected-filter' : 'btn-action'}
							href='javascript:;' onClick={this.onChangeFilter.bind(this,null)} >
							All
						</a>
					</li>
					<li className='action-item'>
						<a className={this.props.filter === true ? 'btn-action selected-filter' : 'btn-action'}
							href='javascript:;' onClick={this.onChangeFilter.bind(this,true)} >
							Done
						</a>
					</li>
					<li className='action-item'>
						<a className={this.props.filter === false ? 'btn-action selected-filter' : 'btn-action'}
							href='javascript:;' onClick={this.onChangeFilter.bind(this,false)} >
							To do
						</a>
					</li>
				</ul>
			</footer>
		)
	}
});

module.exports = FilterAction;
