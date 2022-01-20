// contain feed with comments about stock
function CommentView(props) {
  return React.createElement(
    "div",
    { id: "comment-view" },
    props.comments.map(function (comment) {
      return React.createElement(Comment, { key: comment._id, comment: comment });
    })
  );
}