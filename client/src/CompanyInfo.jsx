// contains company name, price, ticker and company rating
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';

function CompanyInfo (props) {
  return (
      <table>
        <tr>
          <td>Name:</td>
          <td>{props.stockInfo.name}</td>
        </tr>
        <tr>
          <td>Ticker:</td>
          <td>{props.stockInfo.ticker}</td>
        </tr>
        <tr>
          <td>URL:</td>
          <td>{props.stockInfo.homepage_url}</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{props.stockInfo.description}</td>
        </tr>
        <tr>
          <td>Current Price:</td>
          <td>{'$' + Math.round(props.stockPrice) + ' per share'}</td>
        </tr>
      </table>
  )
}

export default CompanyInfo;