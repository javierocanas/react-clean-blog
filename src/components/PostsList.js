import React from 'react'
import PostListItem from './PostListItem'
import BlogAPI from '../api'

const PostsList = () => (
    BlogAPI.all().sort((a, b) => b.Votes - a.Votes).map(post => (
        <PostListItem
            key={post.id}
            id={post.id}
            CreatedAt={post.CreatedAt}
            Title={post.Title} />
    ))
)

export default PostsList