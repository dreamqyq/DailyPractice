function App() {
  const [title, setTitle] = React.useState("Hello React Hooks")
  const [count, setCount] = React.useState(0)

  return (
    <div className="wrap">
      <h1>Hello React Hooks</h1>
      <h2>{title}</h2>
      <button onClick={() => { setTitle(Math.random() * 100) }}>切换标题</button>
      <div className="wrap">
        <h2>{count}</h2>
        <button onClick={() => { setCount(count + 1) }}>+1</button>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)