/**
 * Created by BulldogX on 2019-02-26.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
	CommentWrapper,
	CommentUser,
	CommentContent,
	CommentTimeDeleteWrapper,
	CommentDelete,
	CommentCreateTime} from './style';

export default class Comment extends Component {

	static propTypes = {
		comment:PropTypes.object.isRequired,
		onDeleteComment:PropTypes.func,
	};

	_updateTimeString = () => {
		const {createTime} = this.props.comment;
		const duration = (Date.now() - createTime) / 1000;
		let timeString = null;

		if(duration < 60){
			timeString = `${Math.round(Math.max(duration,1))}秒前`;

		}else if(duration >=60 && duration < 60 *60){
			timeString = `${Math.round(duration / 60)}分钟前`

		}else if(duration >= 60 * 60 && duration < 60 * 60 * 24){
			timeString = `${Math.round(duration / 60 * 60)}小时前`

		}else if(duration >= 60 * 60 * 24 && duration < 60 * 60 * 24 * 7 ){
			timeString = `${Math.round(duration / (60 * 60 * 24)) }天前`;

		}else if(duration >= 60 * 60 * 24 * 7){
			timeString = `${Math.round(duration / (60 * 60 * 24 * 7)) }周前`;
		}
		return timeString;
	};


	onDeleteComment = () => {
		if(this.props.onDeleteComment){
			this.props.onDeleteComment(this.props.index);
		}
	};

	render() {
		const {username,content} = this.props.comment;
		return (
			<CommentWrapper>
				<CommentUser>{username}</CommentUser>

				<CommentContent>: {content}</CommentContent>

				<CommentTimeDeleteWrapper>
					<CommentDelete
						onClick={this.onDeleteComment}
					>删除</CommentDelete>
					<CommentCreateTime>{this._updateTimeString()}</CommentCreateTime>
				</CommentTimeDeleteWrapper>

			</CommentWrapper>
		)
	}
}
