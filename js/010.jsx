class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rabbitTime: 0,
      tortoiseTime: 0,
    }
  }
  rabbitArrive(spendTime) {
    this.setState({
      rabbitTime: spendTime
    })
  }
  tortoiseArrive(spendTime) {
    this.setState({
      tortoiseTime: spendTime
    })
  }
  render() {
    return (
      <div className="wrap">
        <h1>Hello World</h1>
        <TimeRecord rabbitTime={this.state.rabbitTime} tortoiseTime={this.state.tortoiseTime} />
        <Playground rabbitArrive={this.rabbitArrive.bind(this)} tortoiseArrive={this.tortoiseArrive.bind(this)} />
      </div>
    )
  }
}

class Playground extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="playground-wrap">
        <Rabbit arrive={this.props.rabbitArrive.bind(this)} />
        <Tortoise arrive={this.props.tortoiseArrive.bind(this)} />
      </div>
    )
  }
}

class TimeRecord extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="record">
        <div className="wrap">🐇
          <p> 用时：{this.props.rabbitTime} </p>
        </div>
        <div className="wrap">🐢
          <p> 用时：{this.props.tortoiseTime} </p>
        </div>
      </div>
    )
  }
}

class Rabbit extends React.Component {
  constructor(props) {
    super(props)
    let distence = 0
    this.state = {
      style: {
        transform: `translateX(${distence}%)`
      },
      initialTime: new Date()
    }
    let timerId = setInterval(() => {
      distence += 25
      this.setState({
        style: {
          transform: `translateX(${distence}%)`
        }
      })
      if (distence >= 100) {
        window.clearInterval(timerId)
        this.props.arrive(new Date() - this.state.initialTime)
      }
    }, 1000)
  }

  render() {
    return (
      <div className="animal">
        <div className="player" style={this.state.style}>🐇</div>
      </div>
    )
  }
}

class Tortoise extends React.Component {
  constructor(props) {
    super(props)
    let distence = 0
    this.state = {
      style: {
        transform: `translateX(${distence}%)`
      },
      initialTime: new Date()
    }
    let timerId = setInterval(() => {
      distence += 20
      this.setState({
        style: {
          transform: `translateX(${distence}%)`
        }
      })
      if (distence >= 100) {
        window.clearInterval(timerId)
        this.props.arrive(new Date() - this.state.initialTime)
      }
    }, 1000)
  }

  render() {
    return (
      <div className="animal">
        <div className="player" style={this.state.style}>🐢</div>
      </div>
    )
  }
}

render()

function render() {
  ReactDOM.render(
    <App />,
    document.querySelector("#root")
  )
}