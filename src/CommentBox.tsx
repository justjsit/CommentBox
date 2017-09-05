/// <reference path="./interfaces.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
class CommentBox extends React.Component<any, CommentBoxState>{
    constructor(props, CommentBoxState) {
      super(props);
      this.state = {
          data: [{id: 1, author: "星期五", text: "不好吃，环境也不好"},
            {id: 2, author: "刘馨儿", text: "还行吧···"}],
      };
    }
    public loadCommentsFromServer(){
      /*  url请求的数据-----现在没有数据
      this.setState({data: [{id: 1, author: "张三", text: "太假了"},
            {id: 2, author: "李四", text: "明天会更好"}]});
      */
    }
    public componentDidMount(){
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    }
    public handleCommentSubmit(comment) {
      comment.id = Date.now();
      let comments = this.state.data.concat([comment]);
      this.setState({data: comments});
    }
    public render(){
      return (
        <div>
          <h1>评论</h1>
          <CommentList data={this.state.data}/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
        </div>
      );
    }
  }
  export default CommentBox;
