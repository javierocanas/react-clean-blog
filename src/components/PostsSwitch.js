import React from 'react'
import PostsContainer from '../containers'
import Post from './Post'
import { Switch, Route } from 'react-router-dom'

const PostsSwitch = () => (
  <Switch>
    <Route exact path='/posts' component={PostsContainer} />
    <Route path='/posts/:id' component={(props) => <Post {...props} />} />
  </Switch>
)


export default PostsSwitch
