/**
 * Created by BulldogX on 2019-04-02.
 */

import {observable,action,computed,flow,runInAction} from "mobx";

class Todo {
	@observable title = '';
	@observable finished = false;

	constructor(title,finished=false){
		this.title = title;
		this.finished = finished;
	}

	@action
	reverseTodoState = (finished) => {
		this.finished = !finished;
	}
}

class Store {
	@observable todos = [];

	@action
	addTodo = (title) => {
		this.todos.push(new Todo(title));
	};
	@computed get unfinishedTodosCount () {
		return this.todos.filter((todo) => !todo.finished).length;
	}

	@action
	loadTodos = flow(function *() {
		let that = this;
		try {

			let result = yield fetch('/KedeIT/RawFile/master/JSON/Todos.json');
			let json = yield result.json();
			runInAction(() => {
				that.todos = json.map(({title,finished}) => {
					return new Todo(title,finished);
				})
			});

		}catch (e) {
			runInAction(() => {
				alert('出错了')
			})
		}
	})

}

export default new Store();

