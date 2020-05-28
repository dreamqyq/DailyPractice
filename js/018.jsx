function App() {
  // window.location.pathname
  const [tab, setTab] = React.useState(
    window.location.hash.substr(1)
  )

  const showTab = () => {
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
    // pushState 写法：
    // window.history.pushState(null, "", `/${tab}`)
    window.location.hash = tab
    /**
     * 按照上一版的写法，当hash为「tab3」，点击切换成「tab1」会不触发页面render ---> 原因如下
     * state 里存的 tab 始终是 「tab1」，setTab 成 tab1，则不触发render
     * 当点击其他的按钮，react检测到tab从「tab1」变成了其他的值，才会重新触发render
     * 
     * 需要 useState 的时候根据 hash 设置 tab 的默认值
     */
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