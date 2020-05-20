function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Box1 />
      <Box1 name="Enoch" />
      <Box2 />
      <Box2 name="Qin" />
    </div>
  )
}

class Box1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  add() {
    this.setState({
      number: this.state.number + 1
    })
  }
  minus() {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div className="border">
        <span className="red">{this.state.number}</span>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
        <span className="green">我是组件Box1：{this.props.name || "佚名"}</span>
      </div>
    )
  }
}

class Box2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  add() {
    this.setState({
      number: this.state.number + 2
    })
  }
  minus() {
    this.setState({
      number: this.state.number - 2
    })
  }
  render() {
    return (
      <div>
        <span className="green">{this.state.number}</span>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
        <span className="red">我是组件Box2：{this.props.name || "佚名"}</span>
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
