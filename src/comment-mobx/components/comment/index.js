/**
 * Created by BulldogX on 2019-02-26.
 */


import React, {Component} from 'react';
import {observer,inject} from "mobx-react";

import {
	CommentWrapper,
	CommentUser,
	CommentContent,
	CommentTimeDeleteWrapper,
	CommentDelete,
	CommentCreateTime} from './style';


@inject('commentStore')
@observer
class Comment extends Component {

	handleDeleteComment = () => {
		if(this.props.commentStore.deleteComment){
			this.props.commentStore.deleteComment(this.props.index);
		}
	};

	render() {
		const {username,content,createTime} = this.props.comment;
		return (
			<CommentWrapper>
				<CommentUser>{username}</CommentUser>
				<CommentContent>: {content}</CommentContent>
				<CommentTimeDeleteWrapper>
					<CommentDelete
						onClick={this.handleDeleteComment}
					>删除</CommentDelete>
					<CommentCreateTime>{this.props.commentStore.convertTime(createTime)}</CommentCreateTime>
				</CommentTimeDeleteWrapper>

			</CommentWrapper>
		)
	}
}

export default Comment;
