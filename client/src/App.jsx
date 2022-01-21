// main app component
const { Component } = React;
const { render } = ReactDOM;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'user',
      stock: 'TSLA',
      stockPrice: 0,
      stockInfo: {}
    }
    this.askForUsername = this.askForUsername.bind(this);
    this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
    this.updateCurrentStock = this.updateCurrentStock.bind(this);
    this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
    this.updateStockPrice = this.updateStockPrice.bind(this);
    this.updateStockInfo = this.updateStockInfo.bind(this);
  }

  componentDidMount () {
    this.retrieveStockInformation();
  }

  askForUsername () {
    var usernamePrompt = window.prompt('What is your name?');
    this.setState({
      username: usernamePrompt
    })
  }

  updateCurrentStock () {
    var ticker = event.target.value.toUpperCase();
    console.log(ticker)
    this.setState({
      stock: ticker
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

  retrieveStockInformation (e) {
    if (e) {
      e.preventDefault();
    }

    var stockData = {
      stock: this.state.stock
    };

    $.ajax({
      url: 'http://127.0.0.1:3000/stock',
      data: stockData,
      method: 'GET',
      contentType: 'application/json',
      success: (stockData) => {
        console.log('here is the company information:', stockData)
        this.updateStockPrice(stockData.currentPrice);
        this.updateStockInfo(stockData.info.results);
      },
      error: (err) => {
        console.log('This is the error: ', err);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>App Name</h1>
        <Search updateCurrentStock={this.updateCurrentStock} retrieveStockInformation={this.retrieveStockInformation}/>
        <br/>
        <CompanyInfo stockInfo={this.state.stockInfo} stockPrice={this.state.stockPrice} />
        <br/>
        <CommentView stock={this.state.stock}/>
      </div>
    )
  }
}

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);