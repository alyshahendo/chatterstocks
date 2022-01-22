// contain feed with comments about stock
import React from 'react';
import AddComment from './AddComment';
import Comment from './Comment';

class CommentView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="comment-view">
        {this.props.comments.map((comment) => {
          return <Comment key ={comment._id} comment={comment}/>
        })}
      </div>
    )
  }
}

export default CommentView;