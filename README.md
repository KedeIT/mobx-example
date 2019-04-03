src文件目录树：

* `comment`：可使用mobx重新改写
* `comment-mobx`：使用mobx实现的评论列表
* `mobx-learn`：装饰器 & mobx & todolist-demo
* `themeswitch-hoc`：redux demo


通过修改工程入口`index.js`，打开指定的demo


```js
├── comment
│   ├── components
│   │   ├── comment
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── commentInput
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   └── commentList
│   │       ├── index.js
│   │       └── style.js
│   └── container
│       └── commentApp
│           ├── index.js
│           └── style.js
├── comment-mobx
│   ├── components
│   │   ├── comment
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── commentInput
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   └── commentList
│   │       ├── index.js
│   │       └── style.js
│   ├── container
│   │   └── commentApp
│   │       ├── index.js
│   │       └── style.js
│   └── store
│       └── index.js
├── mobx-learn
│   ├── mobx-basic.js
│   ├── mobx-decorator.js
│   └── todolist
│       ├── Store
│       │   └── index.js
│       ├── TodoList
│       │   ├── index.js
│       │   └── style.css
│       ├── TodoView
│       │   └── index.js
│       └── index.js
└── themeswitch-hoc
    ├── components
    │   ├── Header.js
    │   └── ThemeSwitch.js
    ├── containers
    │   ├── Content.js
    │   ├── Header.js
    │   └── ThemeSwitch.js
    └── index.js
```