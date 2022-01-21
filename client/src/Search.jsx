// search feature to bring up a stock's information
import React from 'react';

function Search (props) {
  return (
    <div id="search">
      <form>
        <label htmlFor="search">Search:</label>
        <br/>
        <input onChange={props.updateCurrentStock} name="search" type="text"/>
        <input onClick={props.retrieveStockInformation} type="submit"/>
      </form>
    </div>
  )
}

export default Search;
