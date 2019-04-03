/**
 * Created by BulldogX on 2019-02-26.
 */


import styled from 'styled-components';

export const CommentInputWrapper = styled.div`
	border: 1px solid #f1f1f1;
	padding: 20px;
	margin-bottom: 10px;
	font-size: 15px;	
`;

export const CommentField = styled.div`
	display: flex;
	margin-bottom: 15px;
`;

export const CommentFiledName = styled.span`
	display: flex;
	flex-basis: 100px;
`;

export const CommentFieldInput = styled.input`
	display: flex;
	flex: 1;
	border: 1px solid #e6e6e6;
	border-radius: 3px;
	padding:5px;
	font-size: 14px;
	outline:none;
`;

export const CommentFieldTextarea = styled.textarea`
	display: flex;
	flex: 1;
	border: 1px solid #e6e6e6;
	resize: none;
	border-radius: 3px;
	padding:5px;
	min-height: 80px;
	font-size: 14px;
	outline:none;
`;

export const CommentFieldButtonWrapper = styled.div`
	display:flex;
	justify-content: flex-end;
`;

export const CommentFieldButton = styled.button`
	padding:5px 10px;
	outline:none;
	width:80px;
	border: none;
	border-radius: 3px;
	background: #00a3cf;
	font-size: 14px;
	color: #fff;
	cursor: pointer;
	:active {
		background: #13c1f1;
	}
`;
