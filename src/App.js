import logo from './logo.jpg';
import consola from 'consola';
import './App.css';

function App() {

  const consolaPressBtn = () => {
    consola.success('Hello! World?');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className="App-main">
        <h1>Casiimir</h1>
        <button onClick={ consolaPressBtn }>
          Press Here!
        </button>
      </main>

      <footer className="App-footer">
        <p>Copyright by Me
          <strong> - { new Date().getFullYear() }</strong>
        </p>
      </footer>
    </div>
  );
}

export default App;
