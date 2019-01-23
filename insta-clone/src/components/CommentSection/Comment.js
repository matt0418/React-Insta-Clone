import React from 'react'
import './Comment.css'
import PropTypes from 'prop-types'

function Comment(props) {
    return(
        <div className = "comments">
            {props.comments.map((comment, ind)=> {
                return (<div key = {ind}>
                    <strong><p>{comment.username}</p></strong>
                    <p>{comment.text}</p>
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