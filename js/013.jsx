let createStore = Redux.createStore
let reducer = (state, action) => {
  state = state || {
    money: {
      amount: 100000
    }
  }

  switch(action.type){
    case "spend":
      return {
        money: {
          amount: state.money.amount - action.payload
        }
      }
    case "event1":
      break;
    default: 
      return state
  }
}

const store = createStore(reducer)
class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div className="wrap">
        <h1>Hello React</h1>
        <div className="wrap">
          {this.props.store.money.amount}
          <div className="parent-wrap">
            <Parent1 money={this.props.store.money} />
            <Parent2 money={this.props.store.money} />
          </div>
        </div>
      </div>
    )
  }
}

class Parent1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="wrap">
        Parent1: {this.props.money.amount}
        <Son1 money={this.props.money} />
        <Son2 money={this.props.money} />
      </div>
    )
  }
}

class Parent2 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="wrap">
        Parent2: {this.props.money.amount}
        <Son3 money={this.props.money} />
        <Son4 money={this.props.money} />
      </div>
    )
  }
}
class Son1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="wrap son">
        Son1: {this.props.money.amount}
      </div>
    )
  }
}
class Son2 extends React.Component {
  constructor(props) {
    super(props)
  }
  spendMoney() {
    store.dispatch({
      type: "spend",
      payload: 100
    })
  }
  render() {
    return (
      <div className="wrap son">
        Son2: {this.props.money.amount}
        <button onClick={() => this.spendMoney()}>spend 100</button>
      </div>
    )
  }
}

class Son3 extends React.Component {
  constructor(props) {
    super(props)
  }
  spendMoney() {
    store.dispatch({
      type: "spend",
      payload: 200
    })
  }
  render() {
    return (
      <div className="wrap son">
        Son3: {this.props.money.amount}
        <button onClick={() => this.spendMoney()}>spend 200</button>
      </div>
    )
  }
}

class Son4 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="wrap son">
        Son4: {this.props.money.amount}
      </div>
    )
  }
}


render()
function render() {
  ReactDOM.render(
    <App store={store.getState()} />,
    document.querySelector("#root")
  )
}

store.subscribe(render)