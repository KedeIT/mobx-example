/**
 * Created by BulldogX on 2019-02-26.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from '../comment';

export default class CommentList extends Component {

	static propTypes = {
		comments:PropTypes.array.isRequired,
		handleDeleteComment:PropTypes.func,
	};
	static defaultProps = {
		comments:[],
	};

	handleDeleteComment = (index) => {
		if(this.props.handleDeleteComment){
			this.props.handleDeleteComment(index);
		}
	};

	render() {
		return (
			(this.props.comments.length > 0) && <div>
				{
					this.props.comments.map((comment,i) => {
						return (
							<Comment
								comment={comment}
								onDeleteComment={this.handleDeleteComment}
								index={i}
								key={comment.createTime}
							/>
						)
					})
				}
			</div>
		)
	}
}
