// users can comment on stocks
function Comment (props) {
  return (
    <div className="comment">
      <div className="username">{props.comment.username}</div>
      <div className="text">{props.comment.text}</div>
      <div className="created-at">{props.comment.created_at.substring(0, 10) + ' ' + props.comment.created_at.substring(11, 16)}</div>
      <br />
    </div>
  )
}