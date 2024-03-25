import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";
import NotFound from "./NotFound";
import FormExample from "./FormExample";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/formexample">Form Example</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/counter" Component={Counter} />
            <Route path="/formexample" Component={FormExample} />
            <Route Component={NotFound} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
