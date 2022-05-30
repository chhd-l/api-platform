import routers from "./router";
import { useRoutes } from "react-router-dom";


import './App.less';

function App() {
  const routes = useRoutes(routers);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        {routes}
      </section>
    </div>
  );
}

export default App;
