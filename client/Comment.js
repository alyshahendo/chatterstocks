// users can comment on stocks
function Comment(props) {
  return React.createElement(
    "div",
    { className: "comment" },
    React.createElement(
      "div",
      { className: "username" },
      props.comment.username
    ),
    React.createElement(
      "div",
      { className: "text" },
      props.comment.text
    ),
    React.createElement(
      "div",
      { className: "created-at" },
      props.comment.created_at.substring(0, 10) + ' ' + props.comment.created_at.substring(11, 16)
    ),
    React.createElement("br", null)
  );
}