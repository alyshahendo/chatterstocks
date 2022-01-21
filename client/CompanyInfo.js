// contains company name, price, ticker and company rating
function CompanyInfo(props) {
  return React.createElement(
    "div",
    { id: "company-info" },
    React.createElement("div", { id: "company-name" }),
    React.createElement(
      "div",
      { id: "company-ticker" },
      props.stock
    ),
    React.createElement(
      "div",
      { id: "company-price" },
      props.stockPrice
    )
  );
}