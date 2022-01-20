// main app component
const { Component } = React;
const { render } = ReactDOM;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'user',
      stock: 'TSLA'
    }
    this.askForUsername = this.askForUsername.bind(this);
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

  retrieveStock () {
    var stockData = {
      stock: this.state.stock
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
        console.log('This is the error: ', err);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>App Name</h1>
        <Search />
        <br/>
        <CommentView stock={this.state.stock}/>
      </div>
    )
  }
}

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);