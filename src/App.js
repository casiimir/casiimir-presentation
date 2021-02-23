import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className="App-main">
        <h1>Casiimir</h1>
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
