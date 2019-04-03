/**
 * Created by BulldogX on 2019-02-26.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
	CommentInputWrapper,
	CommentField,
	CommentFiledName,
	CommentFieldInput,
	CommentFieldTextarea,
	CommentFieldButtonWrapper,
	CommentFieldButton
} from './style';

export default class CommentInput extends Component {

	static propTypes = {
		onSubmit:PropTypes.func,
	};

	constructor(props){
		super(props);
		this.textareaRef = React.createRef();

		this.state = {
			username:'',
			content:'',
		}

	}

	componentWillMount() {
		this._loadUserName();
	}

	componentDidMount() {
		this.textareaRef.current.focus();
	}

	_updateUserName = (event) => {
		this.setState({username:event.target.value});
	};
	_updateCommentContent = (event) => {
		this.setState({content:event.target.value});
	};
	_loadUserName = () => {
		const username = localStorage.getItem('username');
		if(username){
			this.setState({username:username});
		}

	};

	handleUserNameOnBlur = (event) => {
		localStorage.setItem('username',event.target.value)
	};

	onSubmit = () => {
		if(this.props.onSubmit){
			this.props.onSubmit({
				username:this.state.username,
				content:this.state.content,
				createTime:Date.now(),
			})
		}

		this.setState({content:''});
	};


	render() {
		return(
			<CommentInputWrapper>

				<CommentField>
					<CommentFiledName>用户名：</CommentFiledName>
					<CommentFieldInput
						value={this.state.username}
						onBlur={this.handleUserNameOnBlur}
						onChange={this._updateUserName}
					/>
				</CommentField>

				<CommentField>
					<CommentFiledName>评论内容：</CommentFiledName>
					<CommentFieldTextarea
						ref={this.textareaRef}
						value={this.state.content}
						onChange={this._updateCommentContent}
					/>
				</CommentField>

				<CommentFieldButtonWrapper>
					<CommentFieldButton
						onClick = {this.onSubmit}
					>发布</CommentFieldButton>
				</CommentFieldButtonWrapper>

			</CommentInputWrapper>
		)
	}
}
