// contains company name, price, ticker and company rating
function CompanyInfo() {
  return React.createElement(
    "div",
    { id: "company-info" },
    React.createElement("div", { id: "company-name" }),
    React.createElement("div", { id: "company-ticker" }),
    React.createElement("div", { id: "company-price" })
  );
}