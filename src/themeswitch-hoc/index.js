/**
 * Created by BulldogX on 2019-01-25.
 */


import React, {Component} from 'react';
import Header from './containers/Header';
import Content from './containers/Content';
import { Provider} from "react-redux";
import { createStore} from "redux";


const themeReducer = (state,action) => {
	if(!state){
		return {
			themeColor:'red'
		}
	}
	switch (action.type) {
		case 'CHANGE_COLOR':{
			return {
				...state,
				themeColor: action.themeColor,
			}
		}
		default:{
			return state;
		}
	}
};

const store = createStore(themeReducer);

export default class Theme extends Component {

	render() {
		return (
			<Provider store={store}>
				<Header />
				<Content />
			</Provider>
		)
	}
}
