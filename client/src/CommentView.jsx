// contain feed with comments about stock
function CommentView (props) {
  return (
    <div id="comment-view">
      {props.comments.map((comment) => {
        return <Comment key ={comment.id} comment={comment}/>
      })}
    </div>
  )
}