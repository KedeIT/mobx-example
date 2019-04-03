/**
 * Created by BulldogX on 2019-02-26.
 */


import React, {Component} from 'react';

import { Wrapper } from './style';

import CommentList from '../../components/commentList';
import CommentInput from '../../components/commentInput';

export default class CommentApp extends Component {

	constructor(props){
		super(props);
		this.state = {
			comments:[],
		};
	}


	componentWillMount() {
		this._loadComments();
	}

	_saveComments = (comments) => {
		localStorage.setItem('comments',JSON.stringify(comments));
	};

	_loadComments = () => {
		let comments = localStorage.getItem('comments');
		if(comments){
			comments = JSON.parse(comments);
			this.setState({comments:comments});
		}
	};

	//提交评论
	handleSubmitComment = (comment) => {

		if(!comment) return;
		if(!comment.username) return alert('请输入用户名');
		if(!comment.content) return alert('请输入评论内容');

		const comments = this.state.comments;
		comments.unshift(comment);
		this.setState({comments:comments});

		this._saveComments(comments);
	};

	//删除评论
	handleDeleteComment = (index) => {
		const comments = this.state.comments;
		comments.splice(index,1);
		this.setState({comments:comments});

		this._saveComments(comments);
	};

	render() {
		return (
			<Wrapper>
				<CommentInput
					onSubmit={this.handleSubmitComment} />
				<CommentList
					comments={this.state.comments}
					handleDeleteComment={this.handleDeleteComment}/>
			</Wrapper>
		)
	}
}
