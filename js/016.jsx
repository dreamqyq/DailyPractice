const themeContext = React.createContext()
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      themeName: "red",
      title: "React Context"
    }
  }
  switchTheme = () => {
    this.setState({
      themeName: this.state.themeName === "red" ? "green" : "red"
    })
  }
  render() {
    return (
      <themeContext.Provider value={
        {
          themeName: this.state.themeName,
          switchTheme: this.switchTheme
        }
      }>
        <div className="wrap">
          <h1>{this.state.title}</h1>
          <themeContext.Consumer>
            {
              (theme) => (
                <div>
                  <One theme={theme.themeName} />
                  <Button theme={theme}>switch theme</Button>
                </div>
              )
            }
          </themeContext.Consumer>
        </div>
      </themeContext.Provider>
    )
  }
}

function One(props) {
  return (
    <div className={`wrap ${props.theme}`}>
      One
      <Two />
      <Three theme={props.theme} />
    </div>
  )
}
function Two() {
  return (
    <div className="wrap">
      Two
    </div>
  )
}

function Three(props) {
  return (
    <div className={`wrap ${props.theme}`}>
      Three
    </div>
  )
}



class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <button
      className={this.props.theme.themeName}
      onClick={this.props.theme.switchTheme}
    >{this.props.children}</button>
  }

}
ReactDOM.render(
  <App />,
  document.querySelector("#root")
)