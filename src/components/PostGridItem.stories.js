import React from 'react'
import PostGridItem from './PostGridItem'
import BlogAPI from '../api'
import { storiesOf } from '@storybook/react'
import { HashRouter } from 'react-router-dom'


const post = BlogAPI.get(1993);

const postImage = {
    backgroundImage: `url(${post.Image})`
}

storiesOf('Posts Page', module)
    .add('Post Grid Item', () => (
        <HashRouter>
            <PostGridItem
                key={post.id}
                id={post.id}
                CreatedAt={post.CreatedAt}
                Title={post.Title}
                postImage={postImage} />
        </HashRouter>
    ));