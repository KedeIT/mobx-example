/**
 * Created by BulldogX on 2019-02-26.
 */


import React, {Component} from 'react';
import {observer,inject} from "mobx-react";

import Comment from '../comment';

@inject('commentStore')
@observer
class CommentList extends Component {


	componentWillMount() {
		this.props.commentStore.initComments();
	}

	render() {
		return (
			(this.props.commentStore.comments.length > 0) && <div>
				{
					this.props.commentStore.comments.map((comment,i) => {
						return (
							<Comment
								comment={comment}
								index={i}
								key={comment.id}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default  CommentList;
