// search feature to bring up a stock's information
function Search(props) {
  return React.createElement(
    "div",
    { id: "search" },
    React.createElement(
      "form",
      null,
      React.createElement(
        "label",
        { htmlFor: "search" },
        "Search:"
      ),
      React.createElement("br", null),
      React.createElement("input", { onChange: props.updateCurrentStock, name: "search", type: "text" }),
      React.createElement("input", { type: "submit" })
    )
  );
}