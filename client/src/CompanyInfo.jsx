// contains company name, price, ticker and company rating
import React from 'react';

function CompanyInfo (props) {
  return (
    <div id="company-info">
      <div id="company-name">{props.stockInfo.name}</div>
      <div id="company-ticker">{props.stockInfo.ticker}</div>
      <div id="company-url">{props.stockInfo.homepage_url}</div>
      <div id="company-description">{props.stockInfo.description}</div>
      <div id="company-price">{props.stockPrice}</div>
    </div>
  )
}

export default CompanyInfo;