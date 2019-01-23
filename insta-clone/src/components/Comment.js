import React from 'react'
import './Comment.css'

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

export default Comment