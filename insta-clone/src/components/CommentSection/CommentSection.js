import React from 'react'
import Comment from './Comment'
import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.post.comments,
            comment: '',
            likes: props.post.likes
        }
    }
    
    addNewComment = (event) => {
        event.preventDefault();
        const newComment = {
            text: this.state.comment,
            username: 'mattryanf'
        }
        const comments = this.state.comments.slice()
        comments.push(newComment)
        this.setState({
            comments,
            comment: ''
        })

    }

    increaseLike = () => {
        if(this.state.likes === this.props.post.likes) {
            this.setState({
                likes: this.props.post.likes++
            })
        } else if (this.state.likes < this.props.post.likes) {
            this.setState({
                likes: this.props.post.likes--
            })
        } else {
            this.setState({
                likes: this.props.post.likes++
            })
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    


    render() {
    return(
        <div className = "comment-wrapper">
            <div className = "top">
                <img src = {this.props.post.thumbnailUrl} alt=''/>
                <strong><p>{this.props.post.username}</p></strong>
                
            </div>
            <img src = {this.props.post.imageUrl} alt = ''/>
            <div className = "icon">
                {this.state.likes > this.props.post.likes ? (
                    <i onClick = {this.increaseLike} class="far fa-heart"></i>
                ):(
                    <i onClick = {this.increaseLike} class="fas fa-heart"></i>
                )}
            
            </div>
            <strong><p>{this.props.post.likes}</p></strong>
            <Comment comments = {this.state.comments}/>
            <p>{this.props.post.timestamp}</p>
            <form onSubmit = {this.addNewComment}>
                    <input 
                    type="text"
                    placeholder="Add a new comment..."
                    onChange = {this.changeHandler}
                    name = "comment"
                    value = {this.state.comment}
                    
                    >
                    
                    </input>
            </form>
        </div>

    )
    }  
}

export default CommentSection