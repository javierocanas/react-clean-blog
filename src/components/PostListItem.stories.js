import React from 'react'
import PostListItem from './PostListItem'
import BlogAPI from '../api'
import { storiesOf } from '@storybook/react'
import { HashRouter } from 'react-router-dom'

const post = BlogAPI.get(1993);

storiesOf('Posts Page', module)
    .add('Post List Item', () => (
        <HashRouter>
            <PostListItem
                key={post.id}
                id={post.id}
                CreatedAt={post.CreatedAt}
                Title={post.Title} />
        </HashRouter>
    ));