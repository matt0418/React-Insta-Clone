import React from 'react'
import Comment from './Comment'

class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.post.comments
        }
    }
    

    render() {
    return(
        <div>
            <div>
                <strong><p>{this.props.post.username}</p></strong>
                <img src = {this.props.post.thumbnailUrl} alt=''/>
            </div>
            <img src = {this.props.post.imageUrl} alt = ''/>
            <Comment comments = {this.state.comments}/>
        </div>

    )
    }  
}

export default CommentSection