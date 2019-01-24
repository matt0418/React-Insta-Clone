import React from 'react'
import './Comment.css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CommentP = styled.p`
    margin-left: 10px;
`


function Comment(props) {
    return(
        <div className = "comments">
            {props.comments.map((comment, ind)=> {
                return (<div key = {ind}>
                    <strong><CommentP>{comment.username}</CommentP></strong>
                    <CommentP>{comment.text}</CommentP>
                </div>)
            })}
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }))
}

export default Comment