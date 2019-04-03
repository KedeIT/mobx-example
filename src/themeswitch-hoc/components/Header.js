/**
 * Created by BulldogX on 2019-01-25.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {

	static contextTypes = {
		store:PropTypes.object,
	};
	render() {
		return (
			<h1 style={{color:this.props.themeColor}}>React.js小书</h1>
		)
	}
}

