import React from 'react'
import constants from '../constants'
import PostsGrid from './PostsGrid'
import PostsList from './PostsList'

const Posts = ({ gridView, toggleView }) => {
  return (
    <div className="posts">
      <div className="posts__most_voted">
        <h3 className="posts__new">Most voted</h3>
        <a className="posts__switch_view" onClick={() => toggleView({ type: constants.TOGGLE_VIEW })}>{gridView ? 'List' : 'Grid'} view</a>
      </div>
      { gridView ?
        <PostsGrid /> :
        <PostsList />
      }
    </div>
  )
}

export default Posts
