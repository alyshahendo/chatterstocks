var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// main app component
var _React = React,
    Component = _React.Component;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

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
    };
    _this.askForUsername = _this.askForUsername.bind(_this);
    _this.retrieveStockInformation = _this.retrieveStockInformation.bind(_this);
    _this.updateCurrentStock = _this.updateCurrentStock.bind(_this);
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.retrieveStockInformation();
      this.retrieveComments();
    }
  }, {
    key: 'updateCurrentCommentValue',
    value: function updateCurrentCommentValue(e) {
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
    key: 'updateAllComments',
    value: function updateAllComments(comments) {
      this.setState({
        comments: comments
      });
    }
  }, {
    key: 'saveComment',
    value: function saveComment(e) {
      var _this2 = this;

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
        success: function success(comment) {
          _this2.addNewComment(comment);
          console.log('Comment saved!');
        },
        error: function error(err) {
          console.log('This is the error: ', err);
        }
      });
    }
  }, {
    key: 'retrieveComments',
    value: function retrieveComments() {
      var _this3 = this;

      var stockData = {
        stock: this.state.stock
      };
      console.log('is ths riht?', stockData);
      $.ajax({
        url: 'http://127.0.0.1:3000/comment',
        data: stockData,
        method: 'GET',
        contentType: 'application/json',
        success: function success(comments) {
          _this3.updateAllComments(comments);
          console.log('Comments updated: ', comments);
        },
        error: function error(err) {
          console.log('This is the error: ', err);
        }
      });
    }
  }, {
    key: 'askForUsername',
    value: function askForUsername() {
      var usernamePrompt = window.prompt('What is your name?');
      this.setState({
        username: usernamePrompt
      });
    }
  }, {
    key: 'updateCurrentStock',
    value: function updateCurrentStock() {
      var ticker = event.target.value.toUpperCase();
      console.log(ticker);
      this.setState({
        stock: ticker
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
    value: function retrieveStockInformation(e) {
      var _this4 = this;

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
        success: function success(stockData) {
          console.log('here is the company information:', stockData);
          _this4.updateStockPrice(stockData.currentPrice);
          _this4.updateStockInfo(stockData.info.results);
          _this4.retrieveComments();
        },
        error: function error(err) {
          console.log('This is the error: ', err);
        }
      });
    }
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
        React.createElement(Search, { updateCurrentStock: this.updateCurrentStock, retrieveStockInformation: this.retrieveStockInformation }),
        React.createElement('br', null),
        React.createElement(CompanyInfo, { stockInfo: this.state.stockInfo, stockPrice: this.state.stockPrice }),
        React.createElement('br', null),
        React.createElement(CommentView, { comments: this.state.comments, stock: this.state.stock })
      );
    }
  }]);

  return App;
}(React.Component);

var appElement = document.getElementById('app');
ReactDOM.render(React.createElement(App, null), appElement);