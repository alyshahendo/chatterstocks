// search feature to bring up a stock's information
import React from 'react';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { spacing } from '@mui/system';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import Button from '@mui/material/Button';


function Search (props) {
  return (
    <div id="search">
      <Box >
      <FormControl sx={{
          borderColor: 'primary.main',
          boxShadow: 1,
          borderRadius: 2,
          minWidth: 500,
          alignContent: 'center',
          ml: 45,
          mb: 5,
          mt: 5
        }} >
          <TextField id='stock-search' label='Enter stock ticker' variant='outlined' onChange={props.updateSearch} gutterBottom={true} />
          <Button onClick={props.retrieveStockInformation} gutterBottom={true} variant="contained">Search</Button>
        </FormControl>
      </Box>
    </div>
  )
}

export default Search;
