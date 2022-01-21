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
      stockInfo: {},
      comments: [],
      currentCommentValue: ''
    }
    this.askForUsername = this.askForUsername.bind(this);
    this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
    this.updateCurrentStock = this.updateCurrentStock.bind(this);
    this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
    this.updateStockPrice = this.updateStockPrice.bind(this);
    this.updateStockInfo = this.updateStockInfo.bind(this);

    this.updateCurrentCommentValue = this.updateCurrentCommentValue.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.retrieveComments = this.retrieveComments.bind(this);
    this.updateAllComments = this.updateAllComments.bind(this);
  }

  componentDidMount () {
    this.retrieveStockInformation();
    this.retrieveComments();
  }

  updateCurrentCommentValue (e) {
    this.setState({
      currentCommentValue: event.target.value
    });
  }

  addNewComment (comment) {
    var updatedComments = this.state.comments;
    updatedComments.unshift(comment);
    this.setState({
      comments: updatedComments
    });
  }

  updateAllComments (comments) {
    this.setState({
      comments: comments
    });
  }

  saveComment (e) {
    e.preventDefault();
    var currentComment = {
      username: this.state.username,
      text: this.state.currentCommentValue,
      stock: this.state.stock
    };

    $.ajax({
      url: 'http://127.0.0.1:3000/comment',
      data: JSON.stringify(currentComment),
      method: 'POST',
      contentType: 'application/json',
      success: (comment) => {
        this.addNewComment(comment);
        console.log('Comment saved!');
      },
      error: (err) => {
        console.log('This is the error: ', err);
      }
    });
  }

  retrieveComments () {
    var stockData = {
      stock: this.state.stock
    };
    console.log('is ths riht?', stockData)
    $.ajax({
      url: 'http://127.0.0.1:3000/comment',
      data: stockData,
      method: 'GET',
      contentType: 'application/json',
      success: (comments) => {
        this.updateAllComments(comments);
        console.log('Comments updated: ', comments);
      },
      error: (err) => {
        console.log('This is the error: ', err);
      }
    });
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
        this.retrieveComments();
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
        <CommentView comments={this.state.comments} stock={this.state.stock}/>
      </div>
    )
  }
}

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);