import React from 'react'
import CommentSection from '../CommentSection/CommentSection'



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



export default PostContainer