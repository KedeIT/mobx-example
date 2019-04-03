/**
 * Created by BulldogX on 2019-01-25.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ThemeSwitch extends Component {

	static propTypes = {
		themeColor: PropTypes.string,
		onSwitchColor: PropTypes.func,
	};

	handleSwitchColor = (color) => {
		if(this.props.onSwitchColor){
			this.props.onSwitchColor(color);
		}
	};


	render() {
		return (
			<div>
				<button
					style={{color:this.props.themeColor}}
					onClick={() =>this.handleSwitchColor('red')}>Red</button>
				<button
					style={{color:this.props.themeColor}}
					onClick={() =>this.handleSwitchColor('blue')}>Blue</button>
			</div>
		)
	}
}
