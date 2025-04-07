import logo from './logo.svg';
import './App.css';
import './topPartOfPage/TopPartOfPage.jsx'
import 'react-refresh/runtime';
import TopPartOfPage from "./topPartOfPage/TopPartOfPage";
import BottomPart from "./bottomPartOfPage/BottomPart";

function App() {
  return(
    <div className="App">
      <div className="App-header">
      <TopPartOfPage />
      </div>
      <div className="footer">
      <BottomPart />
      </div>
    </div>
  )
}

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
