/**
 * Created by BulldogX on 2019-04-02.
 */

import React, {Component} from 'react';
import {inject,observer} from "mobx-react";
import {trace} from 'mobx';
import DevTools from 'mobx-react-devtools';
import TodoView from '../TodoView';
import './style.css';


@inject('todoStore')
@observer
class TodoList extends Component {

	constructor(props){
		super(props);
		this.state = {
			title:'',
		}
	}

	componentDidMount() {
		this.props.todoStore.loadTodos();
	}


	handleTodoInput = (e) => {
		this.setState({title:e.target.value})
	};

	handleTodoSubmit = () => {
		this.props.todoStore.addTodo(this.state.title);
	};

	render() {
		return(
			<div className={'todo-list'}>
				<input
					className={'todo-input'}
					type={'text'}
					onChange={this.handleTodoInput}
				/>
				<button
					className={'todo-button'}
					onClick={this.handleTodoSubmit}
				>Submit</button>
				<ul>
					{this.props.todoStore.todos.map((todo,index) => {
						return <TodoView todo={todo} key={index}/>
					})}
				</ul>
				Todos Left：{this.props.todoStore.unfinishedTodosCount}
				</div>
		)
	}
}

export default  TodoList;
