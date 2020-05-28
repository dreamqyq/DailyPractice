function App() {
  const [tab, setTab] = React.useState("tab1")

  const showTab = () => {
    const tab = window.location.hash.substr(1)
    switch (tab) {
      case "tab1":
        return <Tab1 />
      case "tab2":
        return <Tab2 />
      case "tab3":
        return <Tab3 />
      default:
        return <Tab1 />
    }
  }

  const changeTabAndHash = (tab) => {
    window.location.hash = tab
    setTab(tab)
  }

  return (
    <div className="wrap">
      <button onClick={() => { changeTabAndHash("tab1") }}>tab1</button>
      <button onClick={() => { changeTabAndHash("tab2") }}>tab2</button>
      <button onClick={() => { changeTabAndHash("tab3") }}>tab3</button>
      <div className="wrap">
        {
          showTab()
        }
      </div>
    </div>
  )
}

function Tab1() {
  return (
    <div className="wrap-shadow">
      Tab1
    </div>
  )
}
function Tab2() {
  return (
    <div className="wrap-shadow">
      Tab2
    </div>
  )
}
function Tab3() {
  return (
    <div className="wrap-shadow">
      Tab3
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)