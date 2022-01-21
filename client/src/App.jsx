// main app component
import React, {useEffect, useRef} from 'react';
import Search from './Search';
import CompanyInfo from './CompanyInfo';
import CommentView from './CommentView';
import $ from 'jquery';

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
    // this.askForUsername = this.askForUsername.bind(this);
    // this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
    // this.updateCurrentStock = this.updateCurrentStock.bind(this);
    // this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
    // this.updateStockPrice = this.updateStockPrice.bind(this);
    // this.updateStockInfo = this.updateStockInfo.bind(this);

    // this.updateCurrentCommentValue = this.updateCurrentCommentValue.bind(this);
    // this.saveComment = this.saveComment.bind(this);
    // this.addNewComment = this.addNewComment.bind(this);
    this.retrieveComments = this.retrieveComments.bind(this);
    this.updateAllComments = this.updateAllComments.bind(this);
  }

  componentDidMount () {
    this.serverRequest = this.retrieveComments((err, comments) => {
      if (err == null) {
        this.updateAllComments(comments);
      } else {
        if (err.statusText !== 'abort') {
          console.log('Error loading comments: ', err);
        }
      }
    });
  }

  componentWillUnmount () {
      this.serverRequest.abort();
  }

    updateAllComments (comments) {
      this.setState({
        comments: comments
      });
    }

    retrieveComments (callback) {
      var stockData = {
        stock: this.state.stock
      };

      return $.ajax({
        url: 'http://127.0.0.1:3000/comment',
        data: stockData,
        method: 'GET',
        contentType: 'application/json',
        success: (comments) => {
          // if (_isMounted.current) {
            console.log('Comments updated: ', comments);
            callback(null, comments);
          // }
        },
        error: (err) => {
          if (err.statusText !== 'abort') {
            console.log('Error loading comments: ', err);
          }
          callback(err);
        }
      });
    }

    // updateCurrentCommentValue (e) {
      //   this.setState({
        //     currentCommentValue: event.target.value
        //   });
        // }

  // addNewComment (comment) {
  //   var updatedComments = this.state.comments;
  //   updatedComments.unshift(comment);
  //   this.setState({
  //     comments: updatedComments
  //   });
  // }


  // saveComment (e) {
  //   e.preventDefault();
  //   var currentComment = {
  //     username: this.state.username,
  //     text: this.state.currentCommentValue,
  //     stock: this.state.stock
  //   };

  //   $.ajax({
  //     url: 'http://127.0.0.1:3000/comment',
  //     data: JSON.stringify(currentComment),
  //     method: 'POST',
  //     contentType: 'application/json',
  //     success: (comment) => {
  //       this.addNewComment(comment);
  //       console.log('Comment saved!');
  //     },
  //     error: (err) => {
  //       console.log('This is the error: ', err);
  //     }
  //   });
  // }


  // askForUsername () {
  //   var usernamePrompt = window.prompt('What is your name?');
  //   this.setState({
  //     username: usernamePrompt
  //   })
  // }

  // updateCurrentStock () {
  //   var ticker = event.target.value.toUpperCase();
  //   console.log(ticker)
  //   this.setState({
  //     stock: ticker
  //   });
  // }

  // updateStockPrice (price) {
  //   this.setState ({
  //     stockPrice: price
  //   })
  // }

  // updateStockInfo (stockInfo) {
  //   this.setState ({
  //     stockInfo: stockInfo
  //   })
  // }

  // retrieveStockInformation (e) {
  //   if (e) {
  //     e.preventDefault();
  //   }

  //   var stockData = {
  //     stock: this.state.stock
  //   };

  //   return $.ajax({
  //     url: 'http://127.0.0.1:3000/stock',
  //     data: stockData,
  //     method: 'GET',
  //     contentType: 'application/json',
  //     success: (stockData) => {
  //       console.log('here is the company information:', stockData)
  //       this.updateStockPrice(stockData.currentPrice);
  //       this.updateStockInfo(stockData.info.results);
  //       this.retrieveComments();
  //     },
  //     error: (err) => {
  //       console.log('This is the error: ', err);
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <h1>App Name</h1>
        {/* <Search updateCurrentStock={this.updateCurrentStock} retrieveStockInformation={this.retrieveStockInformation}/> */}
        <br/>
        {/* <CompanyInfo stockInfo={this.state.stockInfo} stockPrice={this.state.stockPrice} /> */}
        <br/>
        <CommentView comments={this.state.comments} stock={this.state.stock}/>
      </div>
    )
  }
}

export default App;