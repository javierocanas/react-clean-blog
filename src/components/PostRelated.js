import React from 'react'
import PostGridItem from './PostGridItem'
import BlogAPI from '../api'

const PostRelated = () => (
    <React.Fragment>
        <div className="related__posts">
            Related posts
        </div>
        <div className="posts__grid">
            {
                BlogAPI.all().slice(0, 3).map(post => {
                    const postImage = {
                        backgroundImage: `url(${post.Image})`
                    }
                    return (
                        <PostGridItem
                            key={post.id}
                            id={post.id}
                            CreatedAt={post.CreatedAt}
                            Title={post.Title}
                            postImage={postImage} />
                    )
                }
                )
            }
        </div>
    </React.Fragment>
)

export default PostRelated