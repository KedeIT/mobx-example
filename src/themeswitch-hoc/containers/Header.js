
/**
 * Created by BulldogX on 2019-01-25.
 */


import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor,
	}
};
export default connect(mapStateToProps)(Header);

