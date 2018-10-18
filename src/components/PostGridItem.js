import React from 'react'
import { Link } from 'react-router-dom'

const PostGridItem = (props) => (
    <div key={props.id} className="posts__grid_post">
        <div className="posts__image" style={props.postImage}></div>
        <div className="posts__date">{props.CreatedAt}</div>
        <Link to={`/posts/${props.id}`}><div className="posts__link">{props.Title}</div></Link>
    </div>
)

export default PostGridItem