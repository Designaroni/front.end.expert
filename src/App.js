import logo from './logo.svg';
import './App.scss';
import Button from './Button';

function App() {
  return (
    <div className="App">
      {/* 
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
      <section>
        <h1>Welcome!</h1>
        <Button />
      </section>
      */}
      <header>
        <h1>Welcome to <a className="inline-anchor"href="/">Front<span class="typography-small-x">x</span>End<span class="typography-small-x">x</span>Expert</a></h1>
      </header>
      <section>

      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
