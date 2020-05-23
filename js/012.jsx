var money = {
  amount: 100000
}

var fnLists = {}
var eventHub = {
  on() {

  },
  trigger() {

  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrap">
        <h1>Hello React</h1>
        <div className="wrap">
          {this.props.money.amount}
          <div className="parent-wrap">
            <Parent1 money={money} />
            <Parent2 money={money} />
          </div>
        </div>
      </div>
    )
  }
}

class Parent1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: this.props.money
    }
  }
  render() {
    return (
      <div className="wrap">
        Parent1: {this.state.money.amount}
        <Son1 money={this.state.money} />
        <Son2 money={this.state.money} />
      </div>
    )
  }
}

class Parent2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: this.props.money
    }
  }
  render() {
    return (
      <div className="wrap">
        Parent2: {this.state.money.amount}
        <Son3 money={this.state.money} />
        <Son4 money={this.state.money} />
      </div>
    )
  }
}
class Son1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: this.props.money
    }
  }
  render() {
    return (
      <div className="wrap son">
        Son1: {this.state.money.amount}
      </div>
    )
  }
}
class Son2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: this.props.money
    }
  }
  spendMoney() {
    this.setState({
      money: {
        amount: this.state.money.amount - 100
      }
    })
    render()
  }
  render() {
    return (
      <div className="wrap son">
        Son2: {this.state.money.amount}
        <button onClick={() => this.spendMoney()}>spend</button>
      </div>
    )
  }
}

class Son3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: this.props.money
    }
  }
  render() {
    return (
      <div className="wrap son">
        Son3: {this.state.money.amount}
      </div>
    )
  }
}

class Son4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: this.props.money
    }
  }
  render() {
    return (
      <div className="wrap son">
        Son4: {this.state.money.amount}
      </div>
    )
  }
}


render()
function render() {
  console.log(1);


  ReactDOM.render(
    <App money={money} />,
    document.querySelector("#root")
  )
}