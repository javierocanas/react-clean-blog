import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = (props) => (
    <div key={props.id} className="posts__post">
        <div className="posts__date">{props.CreatedAt}</div>
        <Link to={`/posts/${props.id}`}><div className="posts__link">{props.Title}</div></Link>
    </div>
)

export default PostListItem