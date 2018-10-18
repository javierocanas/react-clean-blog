import React from 'react'
import Posts from './Posts'
import { storiesOf } from '@storybook/react'
import { HashRouter } from 'react-router-dom'


storiesOf('Posts Page', module)
  .add('Posts Lists', () => (
    <HashRouter>
      <Posts />
    </HashRouter>
  ));