/// <reference path="./interfaces.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
class CommentForm extends React.Component<CommentFormProps, CommentFormState>{
    constructor(props,CommentFormState){
        super(props)
        this.state={
            author:'',
            text:''
        }
    }
    public handleAuthorChange(e){
        this.setState({author:e.target.value})
    }
    public handleTextChange(e){
        this.setState({text:e.target.value})
    }
    public handleSubmit(e){
        e.preventDefault()
        let author:string=this.state.author.trim()
        let text:string = this.state.text.trim()
        if(!text||!author){return}
        this.props.onCommentSubmit({author:author,text:text})
        this.setState({author:'',text:''})
    }
    public render(){
        return (
          <form onSubmit={this.handleSubmit.bind(this)} className="commentForm">
            <input type="text" placeholder="请输入你的名字" value={this.state.author} onChange={this.handleAuthorChange.bind(this)}/>
            <input className="text" type="text" placeholder="请输入要评论的内容" value={this.state.text} onChange={this.handleTextChange.bind(this)}/>
            <input type="submit" value="提交"/>
          </form>
        );
      }
}
export default CommentForm