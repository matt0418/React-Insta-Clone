import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Post = styled.div`
    border: 1px solid silver;
    margin-bottom: 20px;
`

function PostContainer(props) {
    console.log(props)
    return(
        <div>
            {props.postData.map((post) => {
              return(
                <Post>
                    <CommentSection
                    post = {post}
                    />
                </Post>    
              )   
            })}

        </div>
    )
}

PostContainer.propTypes = {
    postData: PropTypes.array.isRequired
}

export default PostContainer