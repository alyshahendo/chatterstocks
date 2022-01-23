// contain feed with comments about stock
import React from 'react';
import AddComment from './AddComment';
import Comment from './Comment';


function CommentView (props) {
  return (
    <div id="comment-view">
      {props.comments.map((comment) => {
        return <Comment key ={comment._id} comment={comment}/>
      })}
    </div>
  )
}

export default CommentView;