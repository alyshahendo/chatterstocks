var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// main app component
import React from 'react';
import $ from 'jquery';
import Search from './Search';
import CompanyInfo from './CompanyInfo';
import CommentView from './CommentView';
import AddComment from './AddComment';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@mui/system';
import Box from '@mui/material/Box';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      search: '',
      stockPrice: 0,
      stockInfo: {},
      comments: [],
      currentCommentValue: '',
      username: 'user'

    };
    _this.updateSearch = _this.updateSearch.bind(_this);
    _this.retrieveStockInformation = _this.retrieveStockInformation.bind(_this);
    _this.updateStockPrice = _this.updateStockPrice.bind(_this);
    _this.updateStockInfo = _this.updateStockInfo.bind(_this);
    _this.updateCurrentCommentValue = _this.updateCurrentCommentValue.bind(_this);
    _this.saveComment = _this.saveComment.bind(_this);
    _this.addNewComment = _this.addNewComment.bind(_this);
    _this.retrieveComments = _this.retrieveComments.bind(_this);
    _this.updateAllComments = _this.updateAllComments.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'updateSearch',
    value: function updateSearch(event) {
      this.setState({
        search: event.target.value
      });
    }
  }, {
    key: 'updateStockPrice',
    value: function updateStockPrice(price) {
      this.setState({
        stockPrice: price
      });
    }
  }, {
    key: 'updateStockInfo',
    value: function updateStockInfo(stockInfo) {
      this.setState({
        stockInfo: stockInfo
      });
    }
  }, {
    key: 'retrieveStockInformation',
    value: function retrieveStockInformation(event) {
      var _this2 = this;

      event.preventDefault();

      var stockData = {
        stock: this.state.search
      };

      return $.ajax({
        url: 'http://127.0.0.1:3000/stock',
        data: stockData,
        method: 'GET',
        contentType: 'application/json',
        success: function success(stockData) {
          _this2.updateStockPrice(stockData.currentPrice);
          _this2.updateStockInfo(stockData.info.results);
          _this2.retrieveComments();
        },
        error: function error(err) {
          console.log('Error loading stock info: ', err);
        }
      });
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
    value: function retrieveComments() {
      var _this3 = this;

      var stockData = {
        stock: this.state.stockInfo.ticker
      };

      return $.ajax({
        url: 'http://127.0.0.1:3000/comment',
        data: stockData,
        method: 'GET',
        contentType: 'application/json',
        success: function success(comments) {
          _this3.updateAllComments(comments);
          console.log('Comments updated: ', comments);
        },
        error: function error(err) {
          console.log('Error loading comments: ', err);
        }
      });
    }
  }, {
    key: 'updateCurrentCommentValue',
    value: function updateCurrentCommentValue(e) {
      console.log(event.target.value);
      this.setState({
        currentCommentValue: event.target.value
      });
    }
  }, {
    key: 'addNewComment',
    value: function addNewComment(comment) {
      var updatedComments = this.state.comments;
      updatedComments.unshift(comment);
      this.setState({
        comments: updatedComments
      });
    }
  }, {
    key: 'saveComment',
    value: function saveComment(event) {
      var _this4 = this;

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
        success: function success(comment) {
          _this4.addNewComment(comment);
          console.log('Comment saved!');
        },
        error: function error(err) {
          console.log('This is the error: ', err);
        }
      });
    }

    // askForUsername () {
    //   var usernamePrompt = window.prompt('What is your name?');
    //   this.setState({
    //     username: usernamePrompt
    //   })
    // }


  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          Typography,
          { variant: 'h2', align: 'center' },
          'App Name'
        ),
        React.createElement(Search, { updateSearch: this.updateSearch, retrieveStockInformation: this.retrieveStockInformation }),
        React.createElement(CompanyInfo, { stockInfo: this.state.stockInfo, stockPrice: this.state.stockPrice }),
        React.createElement('br', null),
        React.createElement(AddComment, { updateCurrentCommentValue: this.updateCurrentCommentValue, saveComment: this.saveComment }),
        React.createElement(CommentView, { comments: this.state.comments, stock: this.state.stock })
      );
    }
  }]);

  return App;
}(React.Component);

export default App;