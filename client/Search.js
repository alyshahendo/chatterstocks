// search feature to bring up a stock's information
import React from 'react';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { spacing } from '@mui/system';

function Search(props) {
  return React.createElement(
    'div',
    { id: 'search' },
    React.createElement(
      'form',
      null,
      React.createElement(
        FormControl,
        { sx: {
            borderColor: 'primary.main',
            boxShadow: 1,
            borderRadius: 2,
            minWidth: 200,
            mx: "auto",
            width: 200
          } },
        React.createElement(TextField, { id: 'stock-search', label: 'Enter stock ticker', variant: 'outlined', onChange: props.updateSearch }),
        React.createElement(Input, { onClick: props.retrieveStockInformation, type: 'submit' })
      )
    )
  );
}

export default Search;