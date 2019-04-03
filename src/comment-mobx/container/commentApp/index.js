/**
 * Created by BulldogX on 2019-02-26.
 */


import React, {Component} from 'react';

import {Provider} from 'mobx-react';

import { Wrapper } from './style';

import CommentList from '../../components/commentList';
import CommentInput from '../../components/commentInput';

import commentStore from '../../store';


import { configure } from 'mobx';

//设置store状态修改只能通过，action触发
configure({
	enforceActions: 'observed'
});

export default class CommentApp extends Component {
	render() {
		return (
			<Provider commentStore={commentStore}>
				<Wrapper>
					<CommentInput />
					<CommentList />
				</Wrapper>
			</Provider>
		)
	}
}
