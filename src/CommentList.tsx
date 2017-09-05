/// <reference path="./interfaces.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Comment from './Comment'
class CommentList extends React.Component<CommentListProps,any>{
public render(){
    let commentNodes = this.props.data.map(comment=>{
        return (
            <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
        )
    })
    return(
        <div className="commentList">
            {commentNodes}
        </div>
    )
}
}
export default CommentList