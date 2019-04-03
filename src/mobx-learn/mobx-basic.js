/**
 * Created by BulldogX on 2019-04-02.
 */


import React, {Component} from 'react';
import { observable,autorun,computed,action,runInAction } from 'mobx';
export default class TestApp extends Component {
	render() {
		return (
			<div>.</div>
		)
	}
}

/********************************MobX*********************************/


const arr = observable([1,2,3]);


let disposer = autorun(() => console.log(arr.toJS()));

arr.push(5);
disposer();
arr.push(9);


class Order {
	@observable price = 10;
	@observable amount = 3;

	@computed get total() {
		return this.price * this.amount;
	}

}

const order = new Order();

autorun(() => console.log('Order:',order.total));

order.amount = 5;



class Title {
	@observable title = '';

	@action
	fetchTitle = async () => {
		try {
			//https://www.jianshu.com/p/0e5616752905
			const result = await fetch('/p/0e5616752905');
			const html = await result.text();
			runInAction(() => {
				this.title = html.match(/<title>([\s\S]+)<\/title>/i)[1];
			})
		}catch (e) {
			runInAction(() => {
				this.title = '请求出错!'
			})
		}
	};
}


const title = new Title();
autorun(() => console.log(title.title));
title.fetchTitle();









