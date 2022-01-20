// main app component
const { Component } = React;
const { render } = ReactDOM;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'user',
      stock: 'TSLA',
      stockPrice: 0
    }
    this.askForUsername = this.askForUsername.bind(this);
    this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
    this.updateCurrentStock = this.updateCurrentStock.bind(this);
    this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
    this.updateStockPrice = this.updateStockPrice.bind(this);
  }

  componentDidMount () {
    // this.askForUsername();
  }

  askForUsername () {
    var usernamePrompt = window.prompt('What is your name?');
    this.setState({
      username: usernamePrompt
    })
  }

  updateCurrentStock () {
    this.setState({
      stock: event.target.value
    });
    console.log(this.state.stock);
  }

  updateStockPrice (price) {
    this.setState ({
      stockPrice: price
    })
  }

  retrieveStockInformation (e) {
    e.preventDefault();
    var stockData = {
      stock: this.state.stock
    };

    $.ajax({
      url: 'http://127.0.0.1:3000/stock',
      data: stockData,
      method: 'GET',
      contentType: 'application/json',
      success: (price) => {
        this.updateStockPrice(price)
        console.log('Stock price updated ', price);
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
        <CommentView stock={this.state.stock}/>
      </div>
    )
  }
}

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);