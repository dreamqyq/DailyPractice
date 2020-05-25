var money = {
  amount: 100000
}

var fnLists = {}
var eventHub = {
  on(eventName, fn) {
    if (!fnLists[eventName]) {
      fnLists[eventName] = []
    }
    fnLists[eventName].push(fn)
  },
  trigger(eventName, params) {
    if (!fnLists[eventName]) { return }
    fnLists[eventName].forEach(fn => {
      fn.call(undefined, params)
    })
  }
}

var listener = {
  init() {
    eventHub.on("spend", (data) => {
      money.amount -= data
      render()
    })
  }
}
listener.init()

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrap">
        <h1>Hello React</h1>
        <div className="wrap">
          {money.amount}
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
      money: money
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
      money: money
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
      money: money
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
      money: money
    }
  }
  // 直接修改money
  // spendMoney() {
  //   money.amount -= 100
  //   this.setState({
  //     money: money
  //   })
  //   render()
  // }

  // 使用eventHub
  spendMoney() {
    eventHub.trigger("spend", 100)
  }
  render() {
    return (
      <div className="wrap son">
        Son2: {this.state.money.amount}
        <button onClick={() => this.spendMoney()}>spend 100</button>
      </div>
    )
  }
}

class Son3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: money
    }
  }
  spendMoney() {
    eventHub.trigger("spend", 200)
  }
  render() {
    return (
      <div className="wrap son">
        Son3: {this.state.money.amount}
        <button onClick={() => this.spendMoney()}>spend 200</button>
      </div>
    )
  }
}

class Son4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: money
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
  ReactDOM.render(
    <App money={money} />,
    document.querySelector("#root")
  )
}