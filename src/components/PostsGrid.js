import React from 'react'
import PostGridItem from './PostGridItem'
import BlogAPI from '../api'

const PostsGrid = () => (
    <div className="posts__grid">
        {
            BlogAPI.all().sort((a, b) => b.Votes - a.Votes).map(post => {
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
)

export default PostsGrid