import React from 'react'
import Comment from './Comment'
import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.post.comments
        }
    }
    

    render() {
    return(
        <div className = "comment-wrapper">
            <div className = "top">
                <img src = {this.props.post.thumbnailUrl} alt=''/>
                <strong><p>{this.props.post.username}</p></strong>
                
            </div>
            <img src = {this.props.post.imageUrl} alt = ''/>
            <Comment comments = {this.state.comments}/>
        </div>

    )
    }  
}

export default CommentSection