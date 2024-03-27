import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ContextExample from "./ContextExample";
import Counter from "./Counter";
import FormExample from "./FormExample";
import Home from "./Home";
import NotFound from "./NotFound";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
import HtmlVsReactTags from "./HtmlVsReactTags";
import ComponentWithProps from "./ComponentWithProps";
import RenderingList from "./RenderingList";
import Dropdown from "./Dropdown";
import StateAsSnapshot from "./StateAsSnapshot";
import QueueingEvent from "./QueueingEvent";
import SpreadOperator from "./SpreadOperator";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
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
                  <Link to="/formexample">Form Example1</Link>
                </li>
                <li>
                  <Link to="/context">Context Example</Link>
                </li>
                <li>
                  <Link to="/htmlvsreacttag">HTML Vs React Tags</Link>
                </li>
                <li>
                  <Link to="/passingprops">Passing Props</Link>
                </li>
                <li>
                  <Link to="/renderinglist">Rendering List</Link>
                </li>
                <li>
                  <Link to="/dropdown">Dropdown</Link>
                </li>
                <li>
                  <Link to="/stateassnapshot">State As Snapshot</Link>
                </li>
                <li>
                  <Link to="/queueingevent">Queueing Event</Link>
                </li>
                <li>
                  <Link to="/spreadoperator">Spread Operator</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/counter" Component={Counter} />
              <Route path="/formexample" Component={FormExample} />
              <Route path="/context" Component={ContextExample} />
              <Route path="/htmlvsreacttag" Component={HtmlVsReactTags} />
              <Route path="/passingprops" Component={ComponentWithProps} />
              <Route path="/renderinglist" Component={RenderingList} />
              <Route path="/dropdown" Component={Dropdown} />
              <Route path="/stateassnapshot" Component={StateAsSnapshot} />
              <Route path="/queueingevent" Component={QueueingEvent} />
              <Route path="/spreadoperator" Component={SpreadOperator} />
              <Route Component={NotFound} />
            </Routes>
          </div>
        </Router>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
