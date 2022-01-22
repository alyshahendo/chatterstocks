// search feature to bring up a stock's information
import React from 'react';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { spacing } from '@mui/system';


function Search (props) {
  return (
    <div id="search">
      <form>
        <FormControl sx={{
          borderColor: 'primary.main',
          boxShadow: 1,
          borderRadius: 2,
          minWidth: 200,
          mx: "auto",
          width: 200
        }} >
          <TextField id='stock-search' label='Enter stock ticker' variant='outlined' onChange={props.updateSearch}/>
          <Input onClick={props.retrieveStockInformation} type='submit'/>
        </FormControl>

      </form>
    </div>
  )
}

export default Search;
