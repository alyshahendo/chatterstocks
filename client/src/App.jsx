// main app component
import React from 'react';
import $ from 'jquery';
import Search from './Search';
import CompanyInfo from './CompanyInfo';
import CommentView from './CommentView';
import AddComment from './AddComment';

import { Typography, AppBar, CssBaseline, Toolbar, Container, Button, Box }from '@material-ui/core';
import { flexbox } from '@mui/system';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      stockPrice: '',
      stockInfo: {},
      comments: [],
      currentCommentValue: '',
      username: 'user'

    }
    this.updateSearch = this.updateSearch.bind(this);
    this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
    this.updateStockPrice = this.updateStockPrice.bind(this);
    this.updateStockInfo = this.updateStockInfo.bind(this);
    this.updateCurrentCommentValue = this.updateCurrentCommentValue.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.retrieveComments = this.retrieveComments.bind(this);
    this.updateAllComments = this.updateAllComments.bind(this);
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

  updateAllComments (comments) {
    this.setState({
      comments: comments
    });
  }

  updateCurrentCommentValue (e) {
    console.log(event.target.value)
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

  retrieveStockInformation (event) {
    event.preventDefault();

    var stockData = {
      stock: this.state.search
    };

    $.ajax({
      url: 'http://127.0.0.1:3000/stock',
      data: stockData,
      method: 'GET',
      contentType: 'application/json',
      success: (stockData) => {
        this.updateStockPrice(stockData.currentPrice);
        this.updateStockInfo(stockData.info.results);
        this.retrieveComments();
      },
      error: (err) => {
        alert('Invalid stock ticker, try again.');
      }
    });
  }

  retrieveComments () {
    var stockData = {
      stock: this.state.stockInfo.ticker
    };

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
        console.log('Error loading comments: ', err);
      }
    });
  }

  saveComment (event) {
    event.preventDefault();
    var currentComment = {
      username: this.state.username,
      text: this.state.currentCommentValue,
      stock: this.state.stockInfo.ticker
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

  render() {
    return (
      <>
      <CssBaseline />
      <main>
        <Container>
        <Typography variant='h2' align='center' style={{color: '#2196f3'}} sx={{m: 5}} >chatterstocks</Typography>
          <Search updateSearch={this.updateSearch} retrieveStockInformation={this.retrieveStockInformation}/>
          <CompanyInfo stockInfo={this.state.stockInfo} stockPrice={this.state.stockPrice} />
          <br/>
          <AddComment updateCurrentCommentValue={this.updateCurrentCommentValue} saveComment={this.saveComment}/>
          <CommentView comments={this.state.comments} stock={this.state.stock}/>
        </Container>
      </main>
      </>

    )
  }
}

export default App;