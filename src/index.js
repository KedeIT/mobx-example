import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';



/*****mobx-learn*********/
// import TestApp from './mobx-learn/mobx-basic';
// import TestApp from './mobx-learn/mobx-decorator';
import TestApp from './mobx-learn/todolist';

// import TestApp from './comment/container/commentApp';

// import TestApp from './comment-mobx/container/commentApp';

// import TestApp from './themeswitch-hoc';

ReactDOM.render(<TestApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
