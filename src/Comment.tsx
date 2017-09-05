/// <reference path="./interfaces.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
class Comment extends React.Component<CommentProps,CommentState>{
    public render(){
        return (
            <div>
                <h2>{this.props.author}</h2>
                {this.props.children}
            </div>
        )
    }
}
export default Comment