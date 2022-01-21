// contain feed with comments about stock
import React from 'react';
import AddComment from './AddComment';
import Comment from './Comment';

class CommentView extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount () {
  //   this.retrieveComments((err, comments) => {
  //     if (err == null) {
  //       // this.updateAllComments(comments);
  //     } else {
  //       throw err;
  //     }
  //   });
  // }

  // updateAllComments (comments) {
  //   this.setState({
  //     comments: comments
  //   });
  // }

  // retrieveComments (callback) {
  //   var stockData = {
  //     stock: this.state.stock
  //   };

  //   return $.ajax({
  //     url: 'http://127.0.0.1:3000/comment',
  //     data: stockData,
  //     method: 'GET',
  //     contentType: 'application/json',
  //     success: (comments) => {
  //       // if (_isMounted.current) {
  //         console.log('Comments updated: ', comments);
  //         callback(null, comments);
  //       // }
  //     },
  //     error: (err) => {
  //       console.log('This is the error: ', err);
  //       callback(err);
  //     }
  //   });
  // }

  render() {
    return (
      <div id="comment-view">
        {/* <AddComment updateCurrentCommentValue={this.updateCurrentCommentValue} saveComment={this.saveComment}/> */}
        {this.props.comments.map((comment) => {
          return <Comment key ={comment._id} comment={comment}/>
        })}
      </div>
    )
  }
}

export default CommentView;