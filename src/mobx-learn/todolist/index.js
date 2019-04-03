/**
 * Created by BulldogX on 2019-04-02.
 */

import React, {Component} from 'react';
import {configure,spy} from 'mobx';
import {Provider} from "mobx-react";
import TodoList from './TodoList';
import store from './Store';

configure({
	enforceActions:'observed'
});

// spy((event) => {
// 	if (event.type === 'action'){
// 		console.log(event);
// 	}
// });
export default class TodoApp extends Component {


	render() {
		return (
			<Provider todoStore = {store}>
				<TodoList />
			</Provider>
		);
	}
}
