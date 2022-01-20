function AddComment(props) {
  return React.createElement(
    "div",
    { id: "add-comment" },
    React.createElement(
      "form",
      null,
      React.createElement(
        "label",
        { htmlFor: "add-comment" },
        "Add a comment:"
      ),
      React.createElement("br", null),
      React.createElement("input", { onChange: props.updateCurrentCommentValue, type: "text", name: "add-comment" }),
      React.createElement("input", { onClick: props.saveComment, type: "submit" })
    )
  );
}