// contains company name, price, ticker and company rating
function CompanyInfo (props) {
  return (
    <div id="company-info">
      <div id="company-name"></div>
      <div id="company-ticker">{props.stock}</div>
      <div id="company-price">{props.stockPrice}</div>
    </div>
  )
}