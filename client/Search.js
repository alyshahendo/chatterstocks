// search feature to bring up a stock's information
function Search() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      null,
      React.createElement("input", { type: "text" }),
      React.createElement("input", { type: "submit" })
    )
  );
}