import React from 'react'
import BlogAPI from '../api'
import PostRelated from './PostRelated'

const Post = (props) => {
  window.scrollTo(0, 0);

  const post = BlogAPI.get(
    parseInt(props.match.params.id, 10)
  )

  if (!post) {
    return <div>Sorry, but the post was not found</div>
  }
  
  const postImage = {
    backgroundImage: `url(${post.Image})`
  }

  return (
    <div className="post">
      <div className="post__author">
        <div className="post__date">{post.CreatedAt}</div>
        <div className="post__author_name">Text by {post.Author}</div>
      </div>
      <div className="post__candy">
        <div className="post__image" style={postImage}></div>
        <div className="post__header">
          <h4>{post.Title}</h4>
          <small>
             - {post.Description}
          </small>
        </div>
        <div className="post__figcaption">Photo by <a href="https://www.instagram.com/sara_photo_912/" target="_blank">@sara</a></div>
      </div>
      <div className="post__content">
        <div className="post__ads"></div>
        <div className="post__text">
          <p>In your world you have total and absolute power. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. Maybe we got a few little happy bushes here, just covered with snow. Just make little strokes like that. The only prerequisite is that it makes you happy. If it makes you happy then it's good.</p>
          <p>I'm sort of a softy, I couldn't shoot Bambi except with a camera. Sometimes you learn more from your mistakes than you do from your masterpieces. With something so strong, a little bit can go a long way.</p>
          <p>At home you have unlimited time. And maybe, maybe, maybe... You can't have light without dark. You can't know happiness unless you've known sorrow.</p>
          <p>The more we do this - the more it will do good things to our heart. We don't make mistakes we just have happy little accidents. Very easy to work these to death. It's all a game of angles. That's the way I look when I get home late; black and blue. Talk to trees, look at the birds. Whatever it takes.</p>
          <p>But we're not there yet, so we don't need to worry about it. Be careful. You can always add more - but you can't take it away. You better get your coat out, this is going to be a cold painting. Just use the old one inch brush. You have to allow the paint to break to make it beautiful.</p>
          <p>Now let's put some happy little clouds in here. Paint anything you want on the canvas. Create your own world. Poor old tree.</p>
          <p>Just let these leaves jump off the brush I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. God gave you this gift of imagination. Use it. You create the dream - then you bring it into your world.</p>
        </div>
      </div>
      <PostRelated />
    </div>
  )
}

export default Post
