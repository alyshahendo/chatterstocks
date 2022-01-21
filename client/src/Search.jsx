// search feature to bring up a stock's information
import Button from '@mui/material/Button';

function Search (props) {
  return (
    <div id="search">
      <form>
        <label htmlFor="search">Search:</label>
        <br/>
        <input onChange={props.updateCurrentStock} name="search" type="text"/>
        <Button onClick={props.retrieveStockInformation} />
      </form>
    </div>
  )
}
