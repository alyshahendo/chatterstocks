// contains company name, price, ticker and company rating
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';

function CompanyInfo(props) {
  return React.createElement(
    Typography,
    { align: 'justify', border: 4 },
    React.createElement(
      'table',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          'Name:'
        ),
        React.createElement(
          'td',
          null,
          props.stockInfo.name
        )
      ),
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          'Ticker:'
        ),
        React.createElement(
          'td',
          null,
          props.stockInfo.ticker
        )
      ),
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          'URL:'
        ),
        React.createElement(
          'td',
          null,
          props.stockInfo.homepage_url
        )
      ),
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          'Description:'
        ),
        React.createElement(
          'td',
          null,
          props.stockInfo.description
        )
      ),
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          'Current Price:'
        ),
        React.createElement(
          'td',
          null,
          '$' + Math.round(props.stockPrice) + ' per share'
        )
      )
    )
  );
}

export default CompanyInfo;