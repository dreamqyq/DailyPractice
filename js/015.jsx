const countContext = React.createContext()
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      store: {
        count: Math.random() * 100,
        randomCount: () => {
          this.setState({
            store: {
              ...this.state.store,
              count: Math.random() * 100
            }
          })
        }
      }
    }
  }
  render() {
    return (
      <countContext.Provider value={this.state.store}>
        <div className="wrap">
          <h1>React Context</h1>
          <F1 />
        </div>
      </countContext.Provider>
    )
  }
}

function F1() {
  return <div className="wrap">
    F1
    <F2 />
  </div>
}
function F2() {
  return <div className="wrap">
    F2
    <F3 />
  </div>
}
function F3() {
  return (
    <countContext.Consumer>
      {
        (store) => (
          <div className="wrap">
            F3
            <F4 store={store} />
          </div >
        )
      }
    </countContext.Consumer>
  )
}
class F4 extends React.Component {
  constructor(props) {
    super(props)
  }
  changeCount() {
    this.props.store.randomCount()
  }
  render() {
    return <div className="wrap">
      F4 --- {this.props.store.count}
      <button onClick={() => { this.changeCount() }}>change count</button>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)