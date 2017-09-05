/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var CommentBox_1 = __webpack_require__(3);
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Index.prototype.render = function () {
        return (React.createElement(CommentBox_1.default, { pollInterval: 2000 }));
    };
    return Index;
}(React.Component));
//添加
ReactDOM.render(React.createElement(Index, null), document.getElementById("root"));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./interfaces.d.ts" />
var React = __webpack_require__(0);
var CommentList_1 = __webpack_require__(4);
var CommentForm_1 = __webpack_require__(6);
var CommentBox = /** @class */ (function (_super) {
    __extends(CommentBox, _super);
    function CommentBox(props, CommentBoxState) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: [{ id: 1, author: "星期五", text: "不好吃，环境也不好" },
                { id: 2, author: "刘馨儿", text: "还行吧···" }],
        };
        return _this;
    }
    CommentBox.prototype.loadCommentsFromServer = function () {
        /*  url请求的数据-----现在没有数据
        this.setState({data: [{id: 1, author: "张三", text: "太假了"},
              {id: 2, author: "李四", text: "明天会更好"}]});
        */
    };
    CommentBox.prototype.componentDidMount = function () {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    };
    CommentBox.prototype.handleCommentSubmit = function (comment) {
        comment.id = Date.now();
        var comments = this.state.data.concat([comment]);
        this.setState({ data: comments });
    };
    CommentBox.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "\u8BC4\u8BBA"),
            React.createElement(CommentList_1.default, { data: this.state.data }),
            React.createElement(CommentForm_1.default, { onCommentSubmit: this.handleCommentSubmit.bind(this) })));
    };
    return CommentBox;
}(React.Component));
exports.default = CommentBox;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./interfaces.d.ts" />
var React = __webpack_require__(0);
var Comment_1 = __webpack_require__(5);
var CommentList = /** @class */ (function (_super) {
    __extends(CommentList, _super);
    function CommentList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommentList.prototype.render = function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (React.createElement(Comment_1.default, { author: comment.author, key: comment.id }, comment.text));
        });
        return (React.createElement("div", { className: "commentList" }, commentNodes));
    };
    return CommentList;
}(React.Component));
exports.default = CommentList;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./interfaces.d.ts" />
var React = __webpack_require__(0);
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comment.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, this.props.author),
            this.props.children));
    };
    return Comment;
}(React.Component));
exports.default = Comment;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./interfaces.d.ts" />
var React = __webpack_require__(0);
var CommentForm = /** @class */ (function (_super) {
    __extends(CommentForm, _super);
    function CommentForm(props, CommentFormState) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            author: '',
            text: ''
        };
        return _this;
    }
    CommentForm.prototype.handleAuthorChange = function (e) {
        this.setState({ author: e.target.value });
    };
    CommentForm.prototype.handleTextChange = function (e) {
        this.setState({ text: e.target.value });
    };
    CommentForm.prototype.handleSubmit = function (e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
        this.setState({ author: '', text: '' });
    };
    CommentForm.prototype.render = function () {
        return (React.createElement("form", { onSubmit: this.handleSubmit.bind(this), className: "commentForm" },
            React.createElement("input", { type: "text", placeholder: "请输入你的名字", value: this.state.author, onChange: this.handleAuthorChange.bind(this) }),
            React.createElement("input", { className: "text", type: "text", placeholder: "请输入要评论的内容", value: this.state.text, onChange: this.handleTextChange.bind(this) }),
            React.createElement("input", { type: "submit", value: "提交" })));
    };
    return CommentForm;
}(React.Component));
exports.default = CommentForm;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map