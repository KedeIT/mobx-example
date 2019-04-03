/**
 * Created by BulldogX on 2019-02-26.
 */

import {observable,action} from 'mobx';


class Comment {
	id = Math.random();
	constructor(username,content,createTime){
		this.username = username;
		this.content = content;
		this.createTime = createTime;
	}
}

class CommentsStore {
	//评论数据
	@observable comments = [];

	//增加评论
	@action
	addComment = (username,content,createTime) => {
		this.comments.unshift(new Comment(username,content,createTime));
		this.saveComments();
	};


	//删除评论
	@action
	deleteComment = (index) => {
		this.comments = [...this.comments.slice(0,index),...this.comments.slice(index+1)];
		this.saveComments();
	};


	//评论列表初始化
	initComments = () => {
		const comments = localStorage.getItem('comments');
		if (comments) {
			this.comments = JSON.parse(comments);
		}
	};

	//保存评论数据到本地
	saveComments = () => {
		localStorage.setItem('comments',JSON.stringify(this.comments));
	};

	//转换时间戳
	convertTime = (createTime) => {
		const duration = (Date.now() - createTime) / 1000;
		let timeString = null;

		if(duration < 60){
			timeString = `${Math.round(Math.max(duration,1))}秒前`;

		}else if(duration >=60 && duration < 60 *60){
			timeString = `${Math.round(duration / 60)}分钟前`

		}else if(duration >= 60 * 60 && duration < 60 * 60 * 24){
			timeString = `${Math.round(duration / (60 * 60))}小时前`

		}else if(duration >= 60 * 60 * 24 && duration < 60 * 60 * 24 * 7 ){
			timeString = `${Math.round(duration / (60 * 60 * 24)) }天前`;

		}else if(duration >= 60 * 60 * 24 * 7){
			timeString = `${Math.round(duration / (60 * 60 * 24 * 7)) }周前`;
		}
		return timeString;
	}
}

export default new CommentsStore();
