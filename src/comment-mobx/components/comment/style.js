/**
 * Created by BulldogX on 2019-02-26.
 */


import styled from 'styled-components';


//评论模块的容器视图
export const CommentWrapper = styled.div`
	display: flex;
	border-bottom: 1px solid #f1f1f1;
	margin-bottom: 10px;
	padding-bottom: 10px;
	min-height: 50px;
	font-size: 15px;
`;

//用户名
export const CommentUser = styled.span`
	flex-shrink: 0;
	//flex-basis: 100px;
	max-width: 100px;
	color:#00a3cf;
`;

//评论内容
export const CommentContent = styled.p`
	color:#000;
	margin:0;
`;

//评论模块右侧的删除、时间容器视图
export const CommentTimeDeleteWrapper = styled.div`
	display: flex;
	margin-left: auto;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	flex-shrink: 0;
`;

//评论删除
export const CommentDelete = styled.span`
	font-size: 12px;
	color: transparent;
	margin-top:0;
	cursor: pointer;
	${CommentWrapper}:hover & {
		color:#00a3cf;
	}
`;


//评论时间
export const CommentCreateTime = styled.span`
	color: #000;
	text-align: center;

`;
