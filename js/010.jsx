class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rabbitTime: 0,
      tortoiseTime: 0,
      initialTime: new Date()
    }
  }
  rabbitArrive(params) {
    let time = new Date() - this.state.initialTime
    this.setState({
      rabbitTime: time
    })
    console.log(params)
  }
  tortoiseArrive(params) {
    let time = new Date() - this.state.initialTime
    this.setState({
      tortoiseTime: time
    })
    console.log(params)
  }
  render() {
    return (
      <div className="wrap">
        <h1>Hello World</h1>
        <TimeRecord rabbitTime={this.state.rabbitTime} tortoiseTime={this.state.tortoiseTime} />
        <Rabbit arrive={this.rabbitArrive.bind(this)} />
        <Tortoise arrive={this.tortoiseArrive.bind(this)} />
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
      }
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
        this.props.arrive("rabbit")
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
      }
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
        this.props.arrive("tortoise")
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