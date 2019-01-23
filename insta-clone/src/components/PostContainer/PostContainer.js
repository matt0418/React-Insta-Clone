import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'


function PostContainer(props) {
    console.log(props)
    return(
        <div>
            {props.postData.map((post) => {
              return(  
                <CommentSection
                 post = {post}
                 />
              )   
            })}

        </div>
    )
}

PostContainer.propTypes = {
    postData: PropTypes.array.isRequired
}

export default PostContainer