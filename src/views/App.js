import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ChildComponent from "./Example/ChildComponent";

/**
 *
 * class component/function component
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>HELLO NGUYEN MINH TIEN WITH REACTJS (HH)</p>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
