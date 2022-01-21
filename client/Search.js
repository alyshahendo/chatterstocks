// search feature to bring up a stock's information
import React from 'react';

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
      React.createElement("input", { onChange: function onChange(e) {
          props.updateSearch(e);
        }, name: "search", type: "text" }),
      React.createElement("input", { onClick: function onClick(e) {
          props.searchTwitter(e);
        }, type: "submit" })
    )
  );
}

export default Search;