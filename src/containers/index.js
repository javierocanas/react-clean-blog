import Posts from '../components/Posts'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    gridView: state.gridView
  };
}

const mapDispatchToProps = (onClick) => {
  return { toggleView: (gridView) => onClick(gridView) }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer