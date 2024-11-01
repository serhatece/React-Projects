import Pokegame from "./Pokegame";
import "./Pokecard.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon Card Game</h1>
        <p>Catch 'em all in this exciting card battle!</p>
      </header>
      <main className="App-content">
        <Pokegame />
      </main>
      <footer className="App-footer">
        <p>Designed with ♥ for Pokémon fans</p>
      </footer>
    </div>
  );
}

export default App;
