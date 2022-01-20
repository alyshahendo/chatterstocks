var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// contain feed with comments about stock
var CommentView = function (_React$Component) {
  _inherits(CommentView, _React$Component);

  function CommentView(props) {
    _classCallCheck(this, CommentView);

    var _this = _possibleConstructorReturn(this, (CommentView.__proto__ || Object.getPrototypeOf(CommentView)).call(this, props));

    _this.state = {
      comments: [],
      currentCommentValue: ''
    };
    _this.updateCurrentCommentValue = _this.updateCurrentCommentValue.bind(_this);
    _this.saveComment = _this.saveComment.bind(_this);
    _this.addNewComment = _this.addNewComment.bind(_this);
    _this.retrieveComments = _this.retrieveComments.bind(_this);
    _this.updateAllComments = _this.updateAllComments.bind(_this);
    return _this;
  }

  _createClass(CommentView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.askForUsername();
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
        stock: this.props.stock
      };

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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'comment-view' },
        React.createElement(AddComment, { updateCurrentCommentValue: this.updateCurrentCommentValue, saveComment: this.saveComment }),
        this.state.comments.map(function (comment) {
          return React.createElement(Comment, { key: comment._id, comment: comment });
        })
      );
    }
  }]);

  return CommentView;
}(React.Component);