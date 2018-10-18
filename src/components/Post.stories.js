import React from 'react'
import Post from './Post';
import { storiesOf } from '@storybook/react'
import { HashRouter } from 'react-router-dom'

storiesOf('Post Page', module)
  .add('Post', () => (
    <HashRouter>
      <Post match={{ params: { id: 1993 } }} />
    </HashRouter>
  ));