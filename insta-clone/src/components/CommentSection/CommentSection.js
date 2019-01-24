import React from 'react'
import Comment from './Comment'
import './CommentSection.css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCommentWrapper = styled.div`
    width: 500px;
    text-align: left;
    .p {
        margin-left: 10px;
    }
`

const FormatPic = styled.img`
    width: 500px;

`
const Thumbail = styled.div`
    display: flex;
    align-items: center;
    
`

const ThumbImg = styled.img`
    border-radius: 100px;
    width: 30px;
    margin: 20px;
`
const BoldP = styled.p`
    margin-left: -10px;
    font-weight: bold;
`

const CommentP = styled.p`
    margin-left: 10px;
`
const PIcon = styled.p`
    margin-top: 10px;
    margin-left: 10px;
`

const StyleForm = styled.form`
    margin-left: 10px;
    margin-bottom: 10px;
`
const StyleInput = styled.input`
    border-top: .25px solid silver;
    border-bottom: none;
    border-left: none;
    border-right: none;
    padding-right: 300px;
    padding-top: 15px;
    padding-bottom: 10px;
    font-size: 1rem;
    padding-left: 10px;
`

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
        <StyledCommentWrapper className = "comment-wrapper">
            <Thumbail className = "top">
                <ThumbImg src = {this.props.post.thumbnailUrl} alt=''/>
                <BoldP>{this.props.post.username}</BoldP>
            </Thumbail>
            <FormatPic src = {this.props.post.imageUrl} alt = ''/>
            <div className = "icon">
                {this.state.likes > this.props.post.likes ? (
                    <PIcon><i onClick = {this.increaseLike} class="far fa-heart"></i></PIcon>
                ):(
                    <PIcon><i onClick = {this.increaseLike} class="fas fa-heart"></i></PIcon>
                )}
            </div>
            <strong><CommentP>{this.props.post.likes} likes</CommentP></strong>
            <Comment comments = {this.state.comments}/>
            <CommentP>{this.props.post.timestamp}</CommentP>
            <StyleForm onSubmit = {this.addNewComment}>
                    <StyleInput 
                    type="text"
                    placeholder="Add a new comment..."
                    onChange = {this.changeHandler}
                    name = "comment"
                    value = {this.state.comment}
                    >
                    
                    </StyleInput>
            </StyleForm>
        </StyledCommentWrapper>

    )
    }  
}

CommentSection.propTypes = {
    post: PropTypes.shape({
        comments: PropTypes.array,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string

    })
}


export default CommentSection