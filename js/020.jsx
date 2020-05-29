let div = document.createElement("div")
div.className = "console-wrap"
document.body.appendChild(div)
console.log = function (content) {
  div.innerHTML += `${content} <br />`
}

class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      content: parseInt(Math.random() * 100),
      isShowSon: true
    }
  }
  changeContent() {
    this.setState({
      content: parseInt(Math.random() * 100)
    })
  }
  toggleShowSon = () => {
    this.setState({
      isShowSon: !this.state.isShowSon
    })
  }
  render() {
    return (
      <div className="wrap red">
        Parent Component <br />
        <button onClick={this.changeContent.bind(this)}>Change Content</button>
        <button onClick={this.toggleShowSon}>Change Son Visibility</button>
        {
          this.state.isShowSon ?
            <Son content={this.state.content} /> : null
        }
      </div>
    )
  }
}

class Son extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    console.log("constructor")
  }
  UNSAFE_componentWillReceiveProps() {
    // 第一次挂载组件 本钩子不会被触发
    // 添加 getDerivedStateFromProps 钩子，以及 getSnapShotBeforeUpdate 后
    // 本钩子不会被触发
    console.log("componentWillReceiveProps")
  }
  UNSAFE_componentWillMount() {
    // 添加 getDerivedStateFromProps 钩子，以及 getSnapShotBeforeUpdate 后
    // 本钩子不会被触发
    console.log("componentWillMount")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  add() {
    console.log("user click")
    this.setState({
      count: this.state.count + 1
    })
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate")
    if (nextProps.content === this.props.content
      && nextState.count === this.state.count
    ) {
      return false
    } else {
      return true
    }
  }
  UNSAFE_componentWillUpdate() {
    // 添加 getDerivedStateFromProps 钩子，以及 getSnapShotBeforeUpdate 后
    // 本钩子不会被触发
    console.log("componentWillUpdate")
  }
  render() {
    console.log("render")
    return (
      <div className="wrap green">
        <span style={{ color: "red" }}> Son Component </span>
        <br />
        My count: {this.state.count} <br />
        Content From Parent: {this.props.content}
        <br />
        <button onClick={() => { this.add() }}>+1</button>
      </div>
    )
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
}

ReactDOM.render(
  <Parent />,
  document.querySelector("#root")
)
