import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CommentBox from './CommentBox'
class Index extends React.Component{
    render(){
        return (
            <CommentBox pollInterval={2000} />
        )
    }
}
//添加
ReactDOM.render(<Index/>, document.getElementById("root"));