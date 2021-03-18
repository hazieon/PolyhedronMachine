import "./App.css";
import Dice from "./components/dice";
const d6 = [1, 2, 3, 4, 5, 6];
function App() {
  return (
    <div className="App">
      <h1>Polyhedron Machine</h1>
      <section className="dice-zone">
        <div id="dice-column" className="d6-zone">
          <Dice type={d6} />
        </div>
        <div id="dice-column" className="d10-zone">
          <Dice type={d6} />
        </div>
        <div id="dice-column" className="d12-zone">
          <Dice type={d6} />
        </div>
      </section>
    </div>
  );
}

export default App;
