var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// main app component
import React, { useEffect, useRef } from 'react';
import Search from './Search';
import CompanyInfo from './CompanyInfo';
import CommentView from './CommentView';
import $ from 'jquery';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      username: 'user',
      stock: 'TSLA',
      stockPrice: 0,
      stockInfo: {},
      comments: [],
      currentCommentValue: ''
      // this.askForUsername = this.askForUsername.bind(this);
      // this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
      // this.updateCurrentStock = this.updateCurrentStock.bind(this);
      // this.retrieveStockInformation = this.retrieveStockInformation.bind(this);
      // this.updateStockPrice = this.updateStockPrice.bind(this);
      // this.updateStockInfo = this.updateStockInfo.bind(this);

      // this.updateCurrentCommentValue = this.updateCurrentCommentValue.bind(this);
      // this.saveComment = this.saveComment.bind(this);
      // this.addNewComment = this.addNewComment.bind(this);
    };_this.retrieveComments = _this.retrieveComments.bind(_this);
    _this.updateAllComments = _this.updateAllComments.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.serverRequest = this.retrieveComments(function (err, comments) {
        if (err == null) {
          _this2.updateAllComments(comments);
        } else {
          if (err.statusText !== 'abort') {
            console.log('Error loading comments: ', err);
          }
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.serverRequest.abort();
    }
  }, {
    key: 'updateAllComments',
    value: function updateAllComments(comments) {
      this.setState({
        comments: comments
      });
    }
  }, {
    key: 'retrieveComments',
    value: function retrieveComments(callback) {
      var stockData = {
        stock: this.state.stock
      };

      return $.ajax({
        url: 'http://127.0.0.1:3000/comment',
        data: stockData,
        method: 'GET',
        contentType: 'application/json',
        success: function success(comments) {
          // if (_isMounted.current) {
          console.log('Comments updated: ', comments);
          callback(null, comments);
          // }
        },
        error: function error(err) {
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

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'App Name'
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(CommentView, { comments: this.state.comments, stock: this.state.stock })
      );
    }
  }]);

  return App;
}(React.Component);

export default App;