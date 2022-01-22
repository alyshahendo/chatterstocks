// main app component
import React from 'react';
import $ from 'jquery';
import Search from './Search';
import CompanyInfo from './CompanyInfo';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      stockPrice: 0,
      stockInfo: {}
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
    this.updateStockPrice = this.updateStockPrice.bind(this);
    this.updateStockInfo = this.updateStockInfo.bind(this);
  }

  updateSearch (event) {
    this.setState({
        search: event.target.value
      });
  }

  updateStockPrice (price) {
    this.setState ({
      stockPrice: price
    })
  }

  updateStockInfo (stockInfo) {
    this.setState ({
      stockInfo: stockInfo
    })
  }

  retrieveStockInformation (event) {
    event.preventDefault();

    var stockData = {
      stock: this.state.search
    };

    return $.ajax({
      url: 'http://127.0.0.1:3000/stock',
      data: stockData,
      method: 'GET',
      contentType: 'application/json',
      success: (stockData) => {
        this.updateStockPrice(stockData.currentPrice);
        this.updateStockInfo(stockData.info.results);
      },
      error: (err) => {
        console.log('Error loading stock info: ', err);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>App Name</h1>
        <Search updateSearch={this.updateSearch} retrieveStockInformation={this.retrieveStockInformation}/>
        <CompanyInfo stockInfo={this.state.stockInfo} stockPrice={this.state.stockPrice} />
      </div>
    )
  }
}

export default App;