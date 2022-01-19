// users can comment on stocks
function Comment(props) {
  return React.createElement(
    "div",
    { className: "comment" },
    props.comment.username
  );
}