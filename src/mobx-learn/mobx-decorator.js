/**
 * Created by BulldogX on 2019-04-02.
 */


import React, {Component} from 'react';

export default class TestApp extends Component {
	render() {
		return (
			<div>.</div>
		)
	}
}

/********************************Decorator*********************************/


function bark(target) {
	target.prototype.bark = () => {
		console.log('汪 汪 汪 ！');
	};
	target.prototype.weight = 30;
}

function nick(nickName) {
	return (target) => {
		target.nickName = nickName;
	}
}

@nick('小黄')
@bark
class Dog {

}


const dog =  new Dog();
dog.bark();
console.log('dog\'s Wieght',dog.weight);
console.log('Dog\'s name',Dog.nickName);


function readonly(target,name,descriptor) {
	descriptor.writable = false;
	return descriptor;
}


class Cat {
	@readonly nickName = '橘座';
}

// Object.defineProperty(Cat.prototype,'nickName',{
// 	value:'橘座',
// 	writable:false,
// });


const cat = new Cat();
console.log(cat.nickName);
// cat.nickName = 'xx';























