import React from 'react'
import PostsSwitch from './PostsSwitch'
import { Switch, Route, Redirect } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' render={() => <Redirect to="/posts" />}/>
      <Route path='/posts' component={PostsSwitch}/>
    </Switch>
  </main>
)

export default Main
