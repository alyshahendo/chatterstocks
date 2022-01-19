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
      props.comment.created_at
    ),
    React.createElement("br", null)
  );
}