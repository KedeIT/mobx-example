/**
 * Created by BulldogX on 2019-04-02.
 */

import React, {Component} from 'react';

export default ({todo}) => {
	return (
		<li>
			<input
				type={'checkbox'}
				checked={todo.finished}
				onChange={() => todo.reverseTodoState(todo.finished)}
			/>
			{todo.title}
		</li>
	)
}
