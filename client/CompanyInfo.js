// contains company name, price, ticker and company rating
function CompanyInfo(props) {
  return React.createElement(
    "div",
    { id: "company-info" },
    React.createElement(
      "div",
      { id: "company-name" },
      props.stockInfo.name
    ),
    React.createElement(
      "div",
      { id: "company-ticker" },
      props.stockInfo.ticker
    ),
    React.createElement(
      "div",
      { id: "company-url" },
      props.stockInfo.homepage_url
    ),
    React.createElement(
      "div",
      { id: "company-description" },
      props.stockInfo.description
    ),
    React.createElement(
      "div",
      { id: "company-price" },
      props.stockPrice
    )
  );
}