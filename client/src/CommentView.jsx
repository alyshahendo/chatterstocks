// contain feed with comments about stock
class CommentView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    return (
      <div id="comment-view">
        <AddComment updateCurrentCommentValue={this.updateCurrentCommentValue} saveComment={this.saveComment}/>
        {this.props.comments.map((comment) => {
          return <Comment key ={comment._id} comment={comment}/>
        })}
      </div>
    )
  }
}