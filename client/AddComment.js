function AddComment() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      null,
      React.createElement(
        "label",
        { "for": "add-comment" },
        "Add a comment:"
      ),
      React.createElement("br", null),
      React.createElement("input", { type: "text", name: "add-comment" }),
      React.createElement("input", { type: "submit" })
    )
  );
}